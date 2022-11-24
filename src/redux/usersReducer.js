const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
  usersData: [
    {id: 1, followed: true, fullName: 'Ann', status: 'Hi there!', location: {city: 'Kaliningrad', country: 'Russia'}, 
    avatarSrc: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'},
    {id: 2, followed: false, fullName: 'Kate', status: 'Whazzzzup?', location: {city: 'Hogwarts', country: 'England'}, 
    avatarSrc: 'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg'},
    {id: 3, followed: true, fullName: 'Peter', status: 'They called me Peter!', location: {city: 'Tortuga', country: 'Carribean sea'}, 
    avatarSrc: 'https://illustrators.ru/uploads/illustration/image/1400706/invisible2.jpg'}
  ]
};

export const usersReducer = (state = initialState, action) => {
  let stateCopy;
  switch(action.type) {
    case FOLLOW:
      stateCopy = {
        ...state, 
        usersData: state.usersData.map( user => {
          if (user.id === action.userId) {
            return {...user, followed: true};
          } 
          return user;
        })
      }
    case UNFOLLOW:
      stateCopy = {
        ...state, 
        usersData: state.usersData.map( user => {
          if (user.id === action.userId) {
            return {...user, followed: false};
          } 
          return user;
        })
      }
    case SET_USERS:
      return {...state, users: [...state.users, ...action.users]};
    default:
      return state;
  }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users})