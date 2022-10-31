import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css';
import { Friends } from './Friends/Friends';

const setActive = ({isActive}) => isActive ? classes.activeLink : classes.a;

export const Sidebar = (props) => {
  return(
    <div className={classes.sidebar}>
      <nav className={classes.nav}>
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
      </nav>
      <Friends state={props.state}/>
    </div>
  );
}