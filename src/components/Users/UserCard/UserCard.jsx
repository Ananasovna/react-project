import styles from "./UserCard.module.css";
import unknownAvatar from "../../assets/img/unknownAvatar.jpg";
import { NavLink } from "react-router-dom";

export let UserCard = ({ user, followingInProgress, unfollow, follow}) => {
  return (
    <div className={styles.userCard}>
      <div className={styles.avatarWrapper}>
        <NavLink to={"/Profile/" + user.id}>
          <img
            src={
              user.photos.small != null
                ? user.photos.small
                : unknownAvatar
            }
            alt=""
            className={styles.avatar}
          />
        </NavLink>

        {user.followed ? (
          <button
            disabled={followingInProgress.some(
              (id) => id === user.id
            )}
            className={styles.followButton}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some(
              (id) => id === user.id
            )}
            className={styles.followButton}
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
      <div className={styles.userInfoWrapper}>
        <div className={styles.userNameWrapper}>
          <div className={styles.userName}>{user.name}</div>
          <div className={styles.UserStatus}>{user.status}</div>
        </div>
        <div className={styles.locationWrapper}>
          <div className={styles.location}>
            {"user.location.country"},
          </div>
          <div className={styles.location}>{"user.location.city"}</div>
        </div>
      </div>
    </div>
  );
};
