import classes from './Message.module.css';

export const Message = (props) => 
    props.message.authorId === 0 ? 
      (<div className={`${classes.message} ${classes.currentUser}`} >
        <p className={classes.text} >{props.message.text}</p> 
      </div>) :
      (<div className={classes.message} >
        <p className={classes.text} >{props.message.text}</p> 
      </div>)
