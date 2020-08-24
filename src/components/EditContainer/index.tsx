import { connect, ConnectOptions, ConnectedProps } from "react-redux";
import Edit from "./Edit";
import { IActivity } from "../../Models/types";
import { Dispatch, bindActionCreators } from "redux";
import { ApplicationState } from "../../store";
import {
  activity_create,
  activity_update,
  activity_select,
} from "../../actions/activity";
import { layout_toogle_activity_container } from "../../actions/layout";

const { activity_update_async_request } = activity_update;
const { activity_create_async_request } = activity_create;

type StateProps = ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: ApplicationState) => {
  return {
    currentActivity: state.activity.data.find(
      (x) => x.id === state.activity.currentActivityId
    ),
    isSubmmiting: state.activity.isSubmmiting,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(
      { activity_create_async_request, activity_update_async_request },
      dispatch
    ),
    onCancel: () => {
      dispatch(activity_select({}));
      dispatch(layout_toogle_activity_container({ activityContainer: "none" }));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type EditContainerProps = ConnectedProps<typeof connector>;

export default connector(Edit);
