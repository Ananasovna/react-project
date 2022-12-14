const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

let initialState = {
  usersData: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
};

export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW:
      return {
        ...state, 
        usersData: state.usersData.map( user => {
          if (user.id === action.userId) {
            return {...user, followed: true};
          } 
          return user;
        })
      }
    case UNFOLLOW:
      return {
        ...state, 
        usersData: state.usersData.map( user => {
          if (user.id === action.userId) {
            return {...user, followed: false};
          } 
          return user;
        })
      }
    case SET_USERS:
      return {...state, usersData: [...action.users]};
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.totalUsersCount}
    default:
      return state;
  }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrenPageAC = (page) => ({type: SET_CURRENT_PAGE, currentPage: page})
export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalCount})