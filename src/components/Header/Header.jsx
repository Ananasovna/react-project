import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { AuthInfo } from './AuthInfo';

export const Header = (props) => {
  return(
      <header className={styles.header}>
        <div className={styles.imgWrapper}>
          <img className={styles.logo} src='https://www.isnotdown.com/assets/pics/genially.png' alt='avatar'></img>
        </div>
        <div className={styles.authBlock}>
            {props.isAuth ?
            <AuthInfo isAuth={props.isAuth} login={props.login} logout={props.logout}/> 
            : <NavLink to={'/login'}>{'Log in'}</NavLink>} 
          </div>
      </header>
  );
}
