import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import { Dialogs } from './Dialogs';



export const DialogsContainer = (props) => {
  let messages = props.store.getState().dialogs.messagesData;
  let dialogs = props.store.getState().dialogs.dialogsData;
  let newMessageText = props.store.getState().dialogs.newMessageText;

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  let changeMessageText = (event) => {
    let action = updateNewMessageTextActionCreator(event);
    props.store.dispatch(action);
  }

  return (
    <Dialogs addMessage={addMessage} changeMessageText={changeMessageText} newMessageText={newMessageText} messages={messages} dialogs={dialogs}/>
  );
} 