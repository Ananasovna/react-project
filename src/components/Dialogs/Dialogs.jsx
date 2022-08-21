import classes from './Dialogs.module.css';
import { Message } from './Message/Message';
import { DialogItem } from './DialogItem/DialogItem';

export const Dialogs = (props) => {
  

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsList}>
        {props.state.dialogsData.map( dialog => <DialogItem id={dialog.id} user={dialog.name} />)}
      </div>
      <div className={classes.messages}>
        {props.state.messagesData.map( message => <Message text={message.text} />)}
      </div>
    </div>
  );
}