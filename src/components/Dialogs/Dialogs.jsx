import classes from './Dialogs.module.css';
import { Message } from './Message/Message';
import { DialogItem } from './DialogItem/DialogItem';
import React from 'react';



export const Dialogs = (props) => {
  let newText = React.createRef();

  let showText = () => {
    props.addMessage(props.state.newMessageText);
  }

  let changeMessageText = () => {
    props.updateNewMessageText(newText.current.value);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsList}>
        {props.state.dialogsData.map( dialog => <DialogItem dialog={dialog} key={dialog.id} />)}
      </div>
      <div className={classes.messages}>
        {props.state.messagesData.map( message => <Message message={message} key={message.id}/>)}
        <div className={classes.textareaWrapper}>
          <textarea ref={newText} name="newText" value={props.state.newMessageText} onChange={changeMessageText} className={classes.textarea}></textarea>
          <button className={classes.textareaButton} onClick={showText}>Send</button>
        </div>
      </div>
    </div>
  );
} 