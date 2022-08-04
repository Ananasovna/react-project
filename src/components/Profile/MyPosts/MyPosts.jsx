import classes from './MyPosts.module.css';
import {Post} from './Post/Post';

export const MyPosts = () => {
  return (
    <div className={classes.posts}>
      <div className={classes.inputWrapper}>
        <div className={classes.h2}>My posts</div>
        <textarea className={classes.input}></textarea>
        <button className={classes.button}>Send</button>
      </div>
      <Post text='How are you?' likeCounter='10'/>
      <Post text='What a good day!' likeCounter='53'/>
      <Post text="It's my first post" likeCounter='2'/>
    </div>
  );
}