import styles from "./UserInfo.module.css";
import { ProfileStatus } from './ProfileStatus';
import unknownAvatar from '../../assets/img/unknownAvatar.jpg';

export const UserInfo = (props) => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.imgWrapper}>
        <img
          className={styles.img}
          src="http://www.cita.com.ua/img/ntours/big/4/1599228157.jpg"
          alt="main-img"
        ></img>
      </div>
      <div className={styles.aboutWrapper}>
        <img
          className={styles.avatar}
          src={props.profile.photos.small || unknownAvatar}
          alt="main-img"
        ></img>
        <div className={styles.about}>
          <div className={styles.personalInfo}>
            <p className={styles.h3}>{props.profile.fullName}</p>
            <div className={styles.infoWrapper}>
              <p className={styles.info}>
                Facebook: {props.profile.contacts.facebook}
              </p>
              <p className={styles.info}>
                Github: {props.profile.contacts.github}
              </p>
              <p className={styles.info}>
                Instagram: {props.profile.contacts.instagram}
              </p>
            </div>
          </div>
          <div className={styles.jobInfo}>
            {props.profile.lookingForAJob ? 'Job wanted' : 'employed'}
          </div>
        </div>
      </div>
      <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
    </div>
  );
};
