import classes from './Dialogs.module.css';
import { Message } from './Message/Message';
import { DialogItem } from './DialogItem/DialogItem';

let longText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquid cupiditate dicta provident, libero delectus perferendis veniam fugiat voluptatum magnam excepturi, quidem iste? Saepe expedita voluptatum assumenda ipsum ullam impedit.'

export const Dialogs = () => {
  const dialogsData = [
    {id: 1, name: 'Ann'},
    {id: 2, name: 'Kate'},
    {id: 3, name: 'Peter'},
    {id: 4, name: 'Nancy'},
    {id: 5, name: 'Mikhail'},
  ];

  const messagesData = [
    {id: 1, text: 'hi'},
    {id: 2, text: 'Whats up?'},
    {id: 3, text: longText}
  ];

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsList}>
        {dialogsData.map( dialog => <DialogItem id={dialog.id} user={dialog.name} />)}
      </div>
      <div className={classes.messages}>
        {messagesData.map( message => <Message text={message.text} />)}
      </div>
    </div>
  );
}