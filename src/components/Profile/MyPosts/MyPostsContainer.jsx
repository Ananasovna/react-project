import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import { StoreContext } from "../../../StoreContext";
import { MyPosts } from "./MyPosts";

export const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let posts = store.getState().profile.postsData;
        let newPostText = store.getState().profile.newPostText;

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let changePostText = (event) => {
          let action = updateNewPostTextActionCreator(event);
          store.dispatch(action);
        };
        
        return <MyPosts
          changePostText={changePostText}
          addPost={addPost}
          posts={posts}
          newPostText={newPostText}
        />;
        }
      }
    </StoreContext.Consumer>
  );
};
