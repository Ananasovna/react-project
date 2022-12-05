import styles from './UserCard.module.css';
import unknownAvatar from '../../assets/img/unknownAvatar.jpg'
import { NavLink } from 'react-router-dom';

export let UserCard = (props) => {
  return (
    <div className={styles.userCard}>
      <div className={styles.avatarWrapper}>
        <NavLink to={'/Profile/' + props.user.id}>
        <img src={props.user.photos.small != null ? props.user.photos.small : unknownAvatar} alt="" className={styles.avatar} />
        </NavLink>
        
        {props.user.followed 
        ? <button className={styles.followButton} onClick={() => { props.unfollow(props.user.id)}}>Unfollow</button>
        : <button className={styles.followButton} onClick={() => { props.follow(props.user.id)}}>Follow</button>
        }
      </div>
      <div className={styles.userInfoWrapper}>
        <div className={styles.userNameWrapper}>
          <div className={styles.userName}>{props.user.name}</div>
          <div className={styles.UserStatus}>{props.user.status}</div>
        </div>
        <div className={styles.locationWrapper}>
          <div className={styles.location}>{'props.user.location.country'},</div>
          <div className={styles.location}>{'props.user.location.city'}</div>
        </div>
      </div>
    </div>
  )
}