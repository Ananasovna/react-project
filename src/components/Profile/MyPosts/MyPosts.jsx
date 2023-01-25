import React from 'react';
import styles from './MyPosts.module.css';
import { Post } from './Post/Post';
import { PostReduxForm } from './PostForm';

export const MyPosts = React.memo((props) => {
  // const onSubmit = (formData) => {
  //   props.addPost(formData.input);
  //   reset('post');
  // }
  
  return (
    <div className={styles.posts}>
      <div className={styles.inputWrapper}>
        <div className={styles.h2}>My posts</div>
        <PostReduxForm addPost={props.addPost} />
      </div>
      {props.posts.map( post => <Post key={post.id} text={post.text} likeCounter={post.likeCounter}/>)}
    </div>
  );
})