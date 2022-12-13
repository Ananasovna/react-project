import {addMessage} from "../../redux/dialogsReducer";
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
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    messages: state.dialogs.messagesData,
    dialogs: state.dialogs.dialogsData,
  }
}

export default compose(
  connect(mapStateToProps, {addMessage}),
  withAuthRedirect
)(DialogsContainer);
