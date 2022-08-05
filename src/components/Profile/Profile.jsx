import classes from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import { UserInfo } from './UserInfo/UserInfo';

export const Profile = () => {
  return (
    <div>
        <UserInfo />
        <MyPosts />
      </div>
  );
}