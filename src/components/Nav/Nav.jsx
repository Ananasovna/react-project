import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const setActive = ({isActive}) => isActive ? classes.activeLink : classes.a;

export const Nav = () => {
  return(
      <aside className={classes.nav}>
        <div>
          <NavLink to='/Profile' className={setActive}>Profile</NavLink>
        </div>
        <div>
          <NavLink to='/Dialogs' className={setActive}>Messages</NavLink>
        </div>
        <div>
          <NavLink to='/News' className={setActive}>News</NavLink>
        </div>
        <div>
          <NavLink to='/Music' className={setActive}>Music</NavLink>
        </div>
        
      </aside>
  );
}