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
        <DialogItem id={dialogsData[0].id} user={dialogsData[0].name} />
        <DialogItem id={dialogsData[1].id} user={dialogsData[1].name} />
        <DialogItem id={dialogsData[2].id} user={dialogsData[2].name} />
        <DialogItem id={dialogsData[3].id} user={dialogsData[3].name} />
        <DialogItem id={dialogsData[4].id} user={dialogsData[4].name} />
      </div>
      <div className={classes.messages}>
        <Message text={messagesData[0].text} />
        <Message text={messagesData[1].text} />
        <Message text={messagesData[2].text} />
      </div>
    </div>
  );
}