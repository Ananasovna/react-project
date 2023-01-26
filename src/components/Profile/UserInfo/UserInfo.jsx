import styles from "./UserInfo.module.css";
import { ProfileStatus } from "./ProfileStatus";
import unknownAvatar from "../../assets/img/unknownAvatar.jpg";
import profileImg from "../../assets/img/profileImg.jpg";
import { useState } from "react";
import { PictureIcon } from "../../assets/icons/PictureIcon";
import { PersonalUserInfo } from "./PersonalUserInfo";
import PersonalUserInfoReduxForm from "./PersonalUserInfoForm";

export const UserInfo = ({
  profile,
  isOwner,
  status,
  updateUserStatus,
  saveAvatar,
  saveProfile,
}) => {
  let [editMode, setEditMode] = useState(false);

  const settingsModeToggle = () => {
    setEditMode(!editMode);
  };

  const onChangeAvatar = (event) => {
    if (event.target.files.length) saveAvatar(event.target.files[0]);
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      settingsModeToggle();
    });
  };

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
              <input
                className={styles.avatarInput}
                type={"file"}
                onChange={onChangeAvatar}
              ></input>
            </label>
          )}
        </div>
        <div className={styles.about}>
          {editMode ? (
            <PersonalUserInfoReduxForm
              onSubmit={onSubmit}
              initialValues={profile}
              profile={profile}
              isOwner={isOwner}
            />
          ) : (
            <PersonalUserInfo
              profile={profile}
              isOwner={isOwner}
              settingsModeToggle={settingsModeToggle}
            />
          )}
        </div>
      </div>
      <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
    </div>
  );
};
