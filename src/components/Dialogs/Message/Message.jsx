import classes from './Message.module.css';

export const Message = (props) => {
  return(
      <div className={classes.message}>
        <p className={classes.text}>{props.text}</p>
      </div>
  );
}