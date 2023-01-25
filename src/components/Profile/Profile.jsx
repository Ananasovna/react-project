import { Preloader } from "../Preloader/Preloader";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { UserInfo } from "./UserInfo/UserInfo";

export const Profile = ({
  profile,
  status,
  updateUserStatus,
  isOwner,
  saveAvatar,
}) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <UserInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateUserStatus={updateUserStatus}
        saveAvatar={saveAvatar}
      />
      <MyPostsContainer profile={profile} />
    </div>
  );
};
