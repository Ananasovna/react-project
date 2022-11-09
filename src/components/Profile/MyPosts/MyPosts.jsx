import classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';



export const MyPosts = (props) => {
  let addPost = () => {
    props.dispatch(addPostActionCreator());

  }

  let changePostText = (event) => {
    let action = updateNewPostTextActionCreator(event.target.value);
    props.dispatch(action);
  }
  
  return (
    <div className={classes.posts}>
      <div className={classes.inputWrapper}>
        <div className={classes.h2}>My posts</div>
        <textarea className={classes.input} value={props.posts.newPostText} onChange={changePostText}></textarea>
        <button className={classes.button} onClick={addPost}>Send</button>
      </div>
      {props.posts.postsData.map( post => <Post key={post.id} text={post.text} likeCounter={post.likeCounter}/>)}
    </div>
  );
}