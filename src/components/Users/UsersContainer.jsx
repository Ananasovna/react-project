import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setCurrenPageAC, setTotalUsersCountAC } from "../../redux/usersReducer";
import { Users } from "./Users";


let mapStateToProps = (state) => {
  return {
    users: state.users.usersData,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow(userId) {
      dispatch(followAC(userId));
    },
    unfollow(userId) {
      dispatch(unfollowAC(userId));
    },
    setUsers(users) {
      dispatch(setUsersAC(users));
    },
    setCurrentPage(page) {
      dispatch(setCurrenPageAC(page));
    },
    setTotalUsersCount(totalCount) {
      dispatch(setTotalUsersCountAC(totalCount));
    },
  }
}

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);