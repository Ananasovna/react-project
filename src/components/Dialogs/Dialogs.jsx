import classes from './Dialogs.module.css';
import { Message } from './Message/Message';
import { DialogItem } from './DialogItem/DialogItem';
import React from 'react';

export const Dialogs = (props) => {
  let showText = () => {
    props.addMessage();
  }

  let onChangeMessageText = (event) => {
    props.updateNewMessageText(event.target.value);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsList}>
        {props.dialogs.map( dialog => <DialogItem dialog={dialog} key={dialog.id} />)}
      </div>
      <div className={classes.messages}>
        {props.messages.map( message => <Message message={message} key={message.id}/>)}
        <div className={classes.textareaWrapper}>
          <textarea name="newText" value={props.newMessageText} onChange={onChangeMessageText} className={classes.textarea}></textarea>
          <button className={classes.textareaButton} onClick={showText}>Send</button>
        </div>
      </div>
    </div>
  );
} 
