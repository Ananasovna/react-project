import { usersAPI } from "../components/api/api";

const FOLLOW = "react-project/users/FOLLOW";
const UNFOLLOW = "react-project/users/UNFOLLOW";
const SET_USERS = "react-project/users/SET-USERS";
const SET_CURRENT_PAGE = "react-project/users/SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "react-project/users/SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "react-project/users/TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "react-project/users/TOGGLE-FOLLOWING-IN-PROGRESS";
const SET_PAGE_SIZE = "react-project/users/SET-PAGE-SIZE";

let initialState = {
  usersData: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return { ...state, usersData: [...action.users] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    case SET_PAGE_SIZE:
      debugger;
      return { ...state, pageSize: state.pageSize + 5 };
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  currentPage: page,
});
export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount: totalCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching,
});
export const toggleFollowingInProgress = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching: isFetching,
  userId,
});
export const increasePageSize = (pageSize) => ({
  type: SET_PAGE_SIZE,
  pageSize,
});

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setCurrentPage(currentPage));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, actionCreator, APIMethod) => {
  dispatch(toggleFollowingInProgress(true, userId));
  const data = await APIMethod(userId);

  if (data.resultCode == 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingInProgress(false, userId));
}

export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, followSuccess, usersAPI.postFollowing)
};

export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, unfollowSuccess, usersAPI.deleteFollowing)
};

export const getMoreUsers = (pageSize) => {
  return (dispatch) => {
    dispatch(increasePageSize(pageSize));
  };
};
