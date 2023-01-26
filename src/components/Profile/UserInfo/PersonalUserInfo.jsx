import styles from './PersonalUserInfo.module.css';
import { EditIcon } from "../../assets/icons/EditIcon";


export const PersonalUserInfo = ({profile, isOwner, settingsModeToggle}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.personalInfo}>
        <p className={styles.h3}>{profile.fullName}</p>
        <div className={styles.infoWrapper}>
          <p className={styles.info}>About me: {profile.aboutMe}</p>
          <p className={styles.info}>Website: {profile.contacts.website}</p>
          <p className={styles.info}>About job: {profile.lookingForAJobDescription}</p>
        </div>
      </div>
      <div className={styles.jobInfo}>
          {profile.lookingForAJob ? "Job wanted" : "Employed"}
      </div>
      {isOwner && (
              <button
                className={styles.settingsButton}
                onClick={settingsModeToggle}
              >
              <EditIcon />
              </button>
            )}
    </div>
  );
};
