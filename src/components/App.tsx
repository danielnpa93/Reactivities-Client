import React, { useEffect } from "react";
import NavBar from "./Nav";
import { GlobalStyle } from "./globalStyle";
import Dashboard from "./Dashboard";
import EditContainer from "./EditContainer";
import ActivityCard from "./Card/Card";
import { Dimmer, Loader } from "semantic-ui-react";
import Card from "./Card";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { ApplicationState } from "../store";
import { Dispatch, bindActionCreators } from "redux";
import { activity_Load } from "../actions/activity";
import { connect, ConnectedProps } from "react-redux";

const { activity_load_async_request } = activity_Load;

function App(props: AppProps) {
  const {
    activityContainer,
    activity_load_async_request,
    currentActivityId,
  } = props;

  useEffect(() => {
    activity_load_async_request();
  }, []);

  const renderActivityContainer = () => {
    switch (activityContainer) {
      case "edit":
        return <EditContainer key={currentActivityId || 0} />;
      case "details":
        return <Card />;
      default:
        return null;
    }
  };

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Dashboard />
      {renderActivityContainer()}
    </>
  );
}

const mapStateToProps = (state: ApplicationState) => ({
  activityContainer: state.layout.activityContainer,
  currentActivityId: state.activity.currentActivityId,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ activity_load_async_request }, dispatch);
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type AppProps = ConnectedProps<typeof connector>;

export default connector(App);
