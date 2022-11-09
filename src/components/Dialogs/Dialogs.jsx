import classes from './Dialogs.module.css';
import { Message } from './Message/Message';
import { DialogItem } from './DialogItem/DialogItem';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';



export const Dialogs = (props) => {
  let showText = () => {
    props.dispatch(addMessageActionCreator());
  }

  let changeMessageText = (event) => {
    let action = updateNewMessageTextActionCreator(event.target.value);
    props.dispatch(action);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsList}>
        {props.state.dialogsData.map( dialog => <DialogItem dialog={dialog} key={dialog.id} />)}
      </div>
      <div className={classes.messages}>
        {props.state.messagesData.map( message => <Message message={message} key={message.id}/>)}
        <div className={classes.textareaWrapper}>
          <textarea name="newText" value={props.state.newMessageText} onChange={changeMessageText} className={classes.textarea}></textarea>
          <button className={classes.textareaButton} onClick={showText}>Send</button>
        </div>
      </div>
    </div>
  );
} 