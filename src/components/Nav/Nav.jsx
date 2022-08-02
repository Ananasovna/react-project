import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

export const Nav = () => {
  return(
      <aside className={classes.nav}>
        <div>
          <NavLink to='/Profile'>Profile</NavLink>
        </div>
        <div>
          <NavLink to='/Dialogs'>Messages</NavLink>
        </div>
        <div>
          <NavLink to='/News'>News</NavLink>
        </div>
        <div>
          <NavLink to='/Music'>Music</NavLink>
        </div>
        
      </aside>
  );
}