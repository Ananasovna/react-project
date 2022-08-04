import classes from './Dialogs.module.css';
import { Message } from './Message/Message';
import { DialogItem } from './DialogItem/DialogItem';

let longText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquid cupiditate dicta provident, libero delectus perferendis veniam fugiat voluptatum magnam excepturi, quidem iste? Saepe expedita voluptatum assumenda ipsum ullam impedit.'

export const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsList}>
        <DialogItem id='1' user='Ann' />
        <DialogItem id='2' user='Kate' />
        <DialogItem id='3' user='Peter' />
        <DialogItem id='4' user='Nancy' />
        <DialogItem id='5' user='Mikhail' />
      </div>
      <div className={classes.messages}>
        <Message text='hi' />
        <Message text='Whats up?' />
        <Message text={longText} />
      </div>
    </div>
  );
}