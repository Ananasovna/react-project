import { addPostActionCreator } from "../../../redux/profileReducer";
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
    addPost(inputText) {
      dispatch(addPostActionCreator(inputText));
    },
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

