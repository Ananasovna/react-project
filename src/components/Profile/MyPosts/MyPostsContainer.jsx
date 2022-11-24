import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux/es/exports";

let mapStateToProps = (state) => {
  return {
    posts: state.profile.postsData,
    newPostText: state.profile.newPostText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost() {
      dispatch(addPostActionCreator());
    },

    changePostText(event) {
      dispatch(updateNewPostTextActionCreator(event));
    },
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

