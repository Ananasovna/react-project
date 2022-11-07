import classes from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import { UserInfo } from './UserInfo/UserInfo';

export const Profile = (props) => {
 
  
  return (
    <div>
        <UserInfo />
        <MyPosts 
        posts={props.state}
        addPost={props.addPost} 
        updateNewPostText={props.updateNewPostText}/>
      </div>
  );
}