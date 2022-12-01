import {addMessageActionCreator, updateNewMessageTextActionCreator,} from "../../redux/dialogsReducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux/es/exports";

let mapStateToProps = (state) => {
  return {
    messages: state.dialogs.messagesData,
    dialogs: state.dialogs.dialogsData,
    newMessageText: state.dialogs.newMessageText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage() {
      dispatch(addMessageActionCreator());
    },

    changeMessageText(event) {
      dispatch(updateNewMessageTextActionCreator(event));
    }
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
