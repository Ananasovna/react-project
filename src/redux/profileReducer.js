const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    {id: 1, text: 'How are you?', likeCounter: '53'},
    {id: 2, text: 'What a good day!', likeCounter: '2'},
    {id: 3, text: "It's my first post", likeCounter: '10'}
  ],

  newPostText: '',
};

export const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD-POST':
      let newPost = {
        id: state.postsData.length + 1,
        text: state.newPostText,
        likeCounter: 0,
      };

      state.postsData.push(newPost);
      state.newPostText = '';
      return state;
    case 'UPDATE-NEW-POST-TEXT':
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => 
  ({type: UPDATE_NEW_POST_TEXT, newText: text});