const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
  postsData: [
    {id: 1, text: 'How are you?', likeCounter: '53'},
    {id: 2, text: 'What a good day!', likeCounter: '2'},
    {id: 3, text: "It's my first post", likeCounter: '10'}
  ],

  newPostText: '',
  profile: null,
};

export const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.postsData.length + 1,
        text: state.newPostText,
        likeCounter: 0,
      };

      let newState = {...state};
      newState.postsData = [...state.postsData];
      newState.postsData.push(newPost);
      newState.newPostText = '';
      return newState;
    }
    case UPDATE_NEW_POST_TEXT: {
      let newState = {...state};
      newState.newPostText = action.newText;
      return newState;
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile};
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => 
  ({type: UPDATE_NEW_POST_TEXT, newText: text});

  export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});