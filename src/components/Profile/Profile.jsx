import { Preloader } from '../Preloader/Preloader';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { UserInfo } from './UserInfo/UserInfo';

export const Profile = ({profile, status, updateUserStatus}) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
        <UserInfo profile={profile} status={status} updateUserStatus={updateUserStatus}/>
        <MyPostsContainer profile={profile}/>
      </div>
  );
}