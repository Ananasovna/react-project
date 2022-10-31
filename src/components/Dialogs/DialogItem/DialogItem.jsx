import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

export const DialogItem = (props) => {
  return(
    <NavLink to={'/Dialogs/' + props.dialog.id} >
      <div className={classes.dialog}>
        <img src={props.dialog.avatarSrc} alt="avatar" className={classes.avatar} />
        <h3 className={classes.h3}>{props.dialog.name}</h3>
      </div>  
    </NavLink>
    
  );
}