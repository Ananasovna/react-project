import { Preloader } from '../Preloader/Preloader';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { UserInfo } from './UserInfo/UserInfo';

export const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
        <UserInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
        <MyPostsContainer profile={props.profile}/>
      </div>
  );
}