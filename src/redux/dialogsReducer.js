const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogsData: [
    {id: 1, name: 'Ann', avatarSrc: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'},
    {id: 2, name: 'Kate', avatarSrc: 'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg'},
    {id: 3, name: 'Peter', avatarSrc: 'https://illustrators.ru/uploads/illustration/image/1400706/invisible2.jpg'},
    {id: 4, name: 'Nancy', avatarSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVapdIeEsAUt-uUF5gbO5F6ilExlMJHJJnUw&usqp=CAU'},
    {id: 5, name: 'Mikhail', avatarSrc: 'https://live.staticflickr.com/827/41909804402_148d98b7ac.jpg'},
  ],
  
  messagesData: [
    {id: 1, text: 'hi'},
    {id: 2, text: 'Whats up?'},
    {id: 3, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquid cupiditate dicta provident, libero delectus perferendis veniam fugiat voluptatum magnam excepturi, quidem iste? Saepe expedita voluptatum assumenda ipsum ullam impedit.'},
    {id: 4, text: 'Hello', authorId: 0},
    {id: 5, text: 'All fine, you?', authorId: 0},
    {id: 6, text: 'I am ok'},
  ],

  newMessageText: '',
};

export const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD-MESSAGE': {
      let newMessage = {
        id: state.messagesData.length + 1, 
        text: state.newMessageText, 
        authorId: 0
      }

      let newState = {...state};
      newState.messagesData = [...state.messagesData];
      newState.messagesData.push(newMessage);
      newState.newMessageText = '';
      return newState;
    }
    case 'UPDATE-NEW-MESSAGE-TEXT': {
      let newState = {...state};
      newState.newMessageText = action.newText;
      return newState;
    }
    default:
      return state;
  }
};

export const addMessage = () => ({type: ADD_MESSAGE});

export const updateNewMessageText = (text) => 
  ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});