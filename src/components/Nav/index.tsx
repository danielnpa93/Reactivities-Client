import { Dispatch, bindActionCreators } from "redux";
import { layout_toogle_activity_container } from "../../actions/layout";
import { activity_select } from "../../actions/activity";
import { connect, ConnectedProps } from "react-redux";
import Nav from "./Nav";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    { layout_toogle_activity_container, activity_select },
    dispatch
  );
};

const connector = connect(null, mapDispatchToProps);

export type NavProps = ConnectedProps<typeof connector>;

export default connector(Nav);
