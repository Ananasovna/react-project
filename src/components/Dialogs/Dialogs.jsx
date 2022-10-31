import classes from './Dialogs.module.css';
import { Message } from './Message/Message';
import { DialogItem } from './DialogItem/DialogItem';

export const Dialogs = (props) => {
  

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsList}>
        {props.state.dialogsData.map( dialog => <DialogItem dialog={dialog} key={dialog.id} />)}
      </div>
      <div className={classes.messages}>
        {props.state.messagesData.map( message => <Message message={message} key={message.id}/>)}
      </div>
    </div>
  );
} 