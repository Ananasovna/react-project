import classes from './MyPosts.module.css';
import {Post} from './Post/Post';

export const MyPosts = (props) => {
  

  return (
    <div className={classes.posts}>
      <div className={classes.inputWrapper}>
        <div className={classes.h2}>My posts</div>
        <textarea className={classes.input}></textarea>
        <button className={classes.button}>Send</button>
      </div>
      {props.postsArr.map( post => <Post key={post.id} text={post.text} likeCounter={post.likeCounter}/>)}
    </div>
  );
}