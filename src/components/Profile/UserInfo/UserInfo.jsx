import styles from "./UserInfo.module.css";
import { ProfileStatus } from "./ProfileStatus";
import unknownAvatar from "../../assets/img/unknownAvatar.jpg";
import profileImg from "../../assets/img/profileImg.jpg";
import { useEffect, useState } from "react";
import { PictureIcon } from "../../assets/icons/PictureIcon";
import { EditIcon } from "../../assets/icons/EditIcon";
import { OkIcon } from "../../assets/icons/OkIcon";

export const UserInfo = ({ profile, isOwner, status, updateUserStatus, saveAvatar }) => {
  let [editMode, setEditMode] = useState(false);
  
  const settingsModeToggle = () => {
    setEditMode(!editMode);
  };

  const onChangeAvatar = (event) => {
    if (event.target.files.length )
    saveAvatar(event.target.files[0]);

  }

  return (
    <div className={styles.userInfo}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={profileImg} alt="main-img"></img>
      </div>
      <div className={styles.aboutWrapper}>
        <div className={styles.avatarContainer}>
          <img
            className={styles.avatar}
            src={profile.photos.large || unknownAvatar}
            alt="main-img"
          ></img>
          {editMode && (
            <label className={styles.avatarInputLabel}>
              <PictureIcon />
              <input className={styles.avatarInput} type={"file"} onChange={onChangeAvatar}></input>
            </label>
          )}
        </div>
        <div className={styles.about}>
          <div className={styles.personalInfo}>
            <p className={styles.h3}>{profile.fullName}</p>
            <div className={styles.infoWrapper}>
              <p className={styles.info}>
                Facebook: {profile.contacts.facebook}
              </p>
              <p className={styles.info}>Github: {profile.contacts.github}</p>
              <p className={styles.info}>
                Instagram: {profile.contacts.instagram}
              </p>
            </div>
          </div>
          <div className={styles.additionalInfo}>
            <div className={styles.jobInfo}>
              {profile.lookingForAJob ? "Job wanted" : "employed"}
            </div>
            {isOwner && (
              <button
                className={styles.settingsButton}
                onClick={settingsModeToggle}
              >
                {editMode ? <OkIcon /> : <EditIcon />}
              </button>
            )}
          </div>
        </div>
      </div>
      <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
    </div>
  );
};
