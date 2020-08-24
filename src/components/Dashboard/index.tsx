import { ApplicationState } from "../../store";
import { Dispatch, bindActionCreators } from "redux";
import { activity_select, activity_remove } from "../../actions/activity";
import { layout_toogle_activity_container } from "../../actions/layout";
import { connect, ConnectedProps } from "react-redux";
import Dashboard from "./Dashboard";

const { activity_remove_async_request } = activity_remove;

const mapStateToProps = (state: ApplicationState) => ({
  activities: state.activity.data,
  removingId: state.activity.removingId,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      activity_select,
      activity_remove_async_request,
      layout_toogle_activity_container,
    },
    dispatch
  );
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type DashboardProps = ConnectedProps<typeof connector>;

export default connector(Dashboard);
