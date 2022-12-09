import {addMessage, updateNewMessageText,} from "../../redux/dialogsReducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux/es/exports";
import React from "react";
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from "redux";

class DialogsContainer extends React.Component {
  
  render () {
    return (
      <Dialogs
      dialogs={this.props.dialogs}
      messages={this.props.messages}
      addMessage={this.props.addMessage}
      updateNewMessageText={this.props.updateNewMessageText}
      newMessageText={this.props.newMessageText}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    messages: state.dialogs.messagesData,
    dialogs: state.dialogs.dialogsData,
    newMessageText: state.dialogs.newMessageText,
    
  }
}

export default compose(
  connect(mapStateToProps, {addMessage, updateNewMessageText}),
  withAuthRedirect
)(DialogsContainer);
