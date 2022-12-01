import classes from './Profile.module.css';
import { UserInfo } from './UserInfo/UserInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';

export const Profile = (props) => {
  return (
    <div>
        <UserInfo />
        <MyPostsContainer />
      </div>
  );
}