import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

export const DialogItem = (props) => {
  return(
    <div className={classes.dialog}>
      <NavLink to={'/Dialogs/' + props.id} >{props.user}</NavLink>
    </div>
      
  );
}