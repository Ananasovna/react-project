import styles from './UserCard.module.css';


export let UserCard = (props) => {
  return (
    <div className={styles.userCard}>
      <div className={styles.avatarWrapper}>
        <img src={props.user.avatarSrc} alt="" className={styles.avatar} />
        <button className={styles.followButton}>
          {props.user.followed ? 'Unfollow' : 'Follow'}
        </button>
      </div>
      <div className={styles.userInfoWrapper}>
        <div className={styles.userNameWrapper}>
          <div className={styles.userName}>{props.user.fullName}</div>
          <div className={styles.UserStatus}>{props.user.status}</div>
        </div>
        <div className={styles.locationWrapper}>
          <div className={styles.location}>{props.user.location.country},</div>
          <div className={styles.location}>{props.user.location.city}</div>
        </div>
      </div>
    </div>
  )
}