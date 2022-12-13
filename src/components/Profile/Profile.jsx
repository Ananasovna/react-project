import { UserInfo } from './UserInfo/UserInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { Preloader } from '../Preloader/Preloader';

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