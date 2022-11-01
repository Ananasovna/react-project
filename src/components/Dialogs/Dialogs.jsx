import classes from './Dialogs.module.css';
import { Message } from './Message/Message';
import { DialogItem } from './DialogItem/DialogItem';
import React from 'react';

let newText = React.createRef();

export const Dialogs = (props) => {
  let showText = () => {
    alert(newText.current.value);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsList}>
        {props.state.dialogsData.map( dialog => <DialogItem dialog={dialog} key={dialog.id} />)}
      </div>
      <div className={classes.messages}>
        {props.state.messagesData.map( message => <Message message={message} key={message.id}/>)}
        <div className={classes.textareaWrapper}>
          <textarea ref={newText} name="newText" className={classes.textarea}></textarea>
          <button className={classes.textareaButton} onClick={showText}>Send</button>
        </div>
      </div>
    </div>
  );
} 