import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

export const Header = (props) => {
  return(
      <header className={styles.header}>
        <div className={styles.imgWrapper}>
          <img className={styles.logo} src='https://www.isnotdown.com/assets/pics/genially.png' alt='avatar'></img>
        </div>
        <div className={styles.authInfo}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>{'Log in'}</NavLink>} 
          </div>
      </header>
  );
}
