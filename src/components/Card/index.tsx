import { connect, ConnectedProps } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { ApplicationState } from "../../store";
import { layout_toogle_activity_container } from "../../actions/layout";
import Card from "./Card";

const mapStateToProps = (state: ApplicationState) => {
  return {
    currentActivity: state.activity.data.find(
      (x) => x.id === state.activity.currentActivityId
    ),
  };
};

const mapDispatchProps = (dispatch: Dispatch) => {
  return bindActionCreators({ layout_toogle_activity_container }, dispatch);
};

const connector = connect(mapStateToProps, mapDispatchProps);

export type CardProps = ConnectedProps<typeof connector>;

export default connector(Card);
