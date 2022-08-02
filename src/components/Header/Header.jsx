import classes from './Header.module.css';

export const Header = () => {
  return(
      <header className={classes.header}>
        <img className={classes.logo} src='https://st2.depositphotos.com/2557937/5388/v/600/depositphotos_53887287-stock-illustration-colorful-people-celebrate-icon-design.jpg' alt='avatar'></img>
      </header>
  );
}
