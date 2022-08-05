import classes from './UserInfo.module.css';

export const UserInfo = () => {
  return (
    <div className={classes.userInfo}>
      <div className={classes.imgWrapper}>
        <img
          className={classes.img}
          src="http://www.cita.com.ua/img/ntours/big/4/1599228157.jpg"
          alt="main-img"
        ></img>
      </div>
      <div className={classes.about}>
        <img
          className={classes.avatar}
          src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
          alt="main-img"
        ></img>
        <div>
          <p className={classes.h3}>Nancy Wheeler</p>
          <div className={classes.infoWrapper}>
            <p className={classes.info}>Birth date: 12.03.1970</p>
            <p className={classes.info}>City: Hawkins</p>
            <p className={classes.info}>Profession: journalist</p>
          </div>
        </div>
      </div>
    </div>
  );
}