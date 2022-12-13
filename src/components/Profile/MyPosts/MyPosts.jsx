import styles from './MyPosts.module.css';
import {Post} from './Post/Post';
import React from 'react';
import { PostReduxForm } from './PostForm';

export const MyPosts = (props) => {
  const onSubmit = (formData) => {
    console.log(formData.input);
    props.addPost(formData.input);
  }
  
  return (
    <div className={styles.posts}>
      <div className={styles.inputWrapper}>
        <div className={styles.h2}>My posts</div>
        <PostReduxForm onSubmit={onSubmit} />
      </div>
      {props.posts.map( post => <Post key={post.id} text={post.text} likeCounter={post.likeCounter}/>)}
    </div>
  );
}