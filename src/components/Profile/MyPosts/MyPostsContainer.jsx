import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import { MyPosts } from './MyPosts';

export const MyPostsContainer = (props) => {
  let posts = props.store.getState().profile.postsData;
  let newPostText = props.store.getState().profile.newPostText;

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let changePostText = (event) => {
    let action = updateNewPostTextActionCreator(event);
    props.store.dispatch(action);
  }
  
  return (
    <MyPosts changePostText={changePostText} addPost={addPost} posts={posts} newPostText={newPostText}/>
  );
}