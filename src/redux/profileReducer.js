import { profileAPI } from "../components/api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
  postsData: [
    { id: 1, text: "How are you?", likeCounter: "53" },
    { id: 2, text: "What a good day!", likeCounter: "2" },
    { id: 3, text: "It's my first post", likeCounter: "10" },
  ],

  profile: null,
  status: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.postsData.length + 1,
        text: action.newPostText,
        likeCounter: 0,
      };

      let newState = { ...state };
      newState.postsData = [...state.postsData];
      newState.postsData.push(newPost);
      return newState;
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_USER_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST: {
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id != action.postId),
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export const deletePostActionCreator = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

export const getProfile = (userId) => async (dispatch) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};

export const getUserStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfileStatus(userId);
  dispatch(setUserStatus(response));
};

export const updateUserStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateProfileStatus(status);
  if (response.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};
