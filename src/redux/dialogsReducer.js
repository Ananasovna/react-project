const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const dialogsReducer = (state, action) => {
  switch(action.type) {
    case 'ADD-MESSAGE':
      let newMessage = {
        id: state.messagesData.length + 1, 
        text: state.newMessageText, 
        authorId: 0
      }

      state.messagesData.push(newMessage);
      state.newMessageText = '';
      return state;
    case 'UPDATE-NEW-MESSAGE-TEXT':
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextActionCreator = (text) => 
  ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});