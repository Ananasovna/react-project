import classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import React from 'react';

export const MyPosts = (props) => {
  let onAddPostClick = () => {
    props.addPost();
  }

  let onPostChange = (event) => {
    props.changePostText(event.target.value);
  }
  
  return (
    <div className={classes.posts}>
      <div className={classes.inputWrapper}>
        <div className={classes.h2}>My posts</div>
        <textarea className={classes.input} value={props.newPostText} onChange={onPostChange}></textarea>
        <button className={classes.button} onClick={onAddPostClick}>Send</button>
      </div>
      {props.posts.map( post => <Post key={post.id} text={post.text} likeCounter={post.likeCounter}/>)}
    </div>
  );
}