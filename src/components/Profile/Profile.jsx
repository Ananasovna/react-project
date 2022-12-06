import classes from './Profile.module.css';
import { UserInfo } from './UserInfo/UserInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { Preloader } from '../Preloader/Preloader';

export const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
        <UserInfo profile={props.profile}/>
        <MyPostsContainer profile={props.profile}/>
      </div>
  );
}