import classes from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
  return (
    <div>
        <div className={classes.imgWrapper}>
          <img className={classes.img} src='http://www.cita.com.ua/img/ntours/big/4/1599228157.jpg' alt='main-img'></img>
        </div>
        <div className={classes.about}>
          <img className={classes.avatar} src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg' alt='main-img'></img>
          <div>Info</div>
        </div>
        <MyPosts />
      </div>
  );
}