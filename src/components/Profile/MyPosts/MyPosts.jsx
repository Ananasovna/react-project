import classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import React from 'react';

export const MyPosts = (props) => {
  let newPost = React.createRef();

  let addPost = () => {
    props.addPost(newPost.current.value);
    newPost.current.value = '';
  }

  return (
    <div className={classes.posts}>
      <div className={classes.inputWrapper}>
        <div className={classes.h2}>My posts</div>
        <textarea className={classes.input} ref={newPost}></textarea>
        <button className={classes.button} onClick={addPost}>Send</button>
      </div>
      {props.posts.map( post => <Post key={post.id} text={post.text} likeCounter={post.likeCounter}/>)}
    </div>
  );
}