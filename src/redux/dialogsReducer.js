const ADD_MESSAGE = 'ADD-MESSAGE';

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

};

export const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD-MESSAGE': {
      let newMessage = {
        id: state.messagesData.length + 1, 
        text: action.newMessageText, 
        authorId: 0
      }

      let newState = {...state};
      newState.messagesData = [...state.messagesData];
      newState.messagesData.push(newMessage);
      return newState;
    }
    default:
      return state;
  }
};

export const addMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});
