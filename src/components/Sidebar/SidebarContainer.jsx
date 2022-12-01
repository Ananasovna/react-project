import {Sidebar} from './Sidebar';
import { connect } from "react-redux/es/exports";


let mapStateToProps = (state) => {
  return {
    state: state.dialogs.dialogsData,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

  }
}

export const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);