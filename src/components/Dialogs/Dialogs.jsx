import classes from './Dialogs.module.css';
import { Message } from './Message/Message';
import { DialogItem } from './DialogItem/DialogItem';
import React from 'react';
import { DialogReduxForm} from './DialogForm';

export const Dialogs = (props) => {
  const onSubmit = (formData) => {
    props.addMessage(formData.newText);
    // formData.newText = '';
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsList}>
        {props.dialogs.map( dialog => <DialogItem dialog={dialog} key={dialog.id} />)}
      </div>
      <div className={classes.messages}>
        {props.messages.map( message => <Message message={message} key={message.id}/>)}
        <DialogReduxForm newMessageText={props.newMessageText} onSubmit={onSubmit} />
      </div>
    </div>
  );
} 
