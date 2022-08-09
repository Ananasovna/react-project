import classes from './Header.module.css';

export const Header = () => {
  return(
      <header className={classes.header}>
        <div className={classes.imgWrapper}>
          <img className={classes.logo} src='https://www.isnotdown.com/assets/pics/genially.png' alt='avatar'></img>
        </div>
        
      </header>
  );
}
