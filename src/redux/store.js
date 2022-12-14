import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";


export let store = {
  _state: {
    profile: {
      postsData: [
        {id: 1, text: 'How are you?', likeCounter: '53'},
        {id: 2, text: 'What a good day!', likeCounter: '2'},
        {id: 3, text: "It's my first post", likeCounter: '10'}
      ],
  
      newPostText: '',
    },
    
    dialogs: {
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
    },
  },
  _callSubscriber() {
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
    
    this._callSubscriber(this);
  },

};


  

