import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
} from "../../redux/usersReducer";
import { Users } from "./Users";
import axios from "axios";
import React from "react";
import { Preloader } from "../Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChange = (page) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChange={this.onPageChange}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.users.usersData,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow(userId) {
//       dispatch(followAC(userId));
//     },
//     unfollow(userId) {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers(users) {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage(page) {
//       dispatch(setCurrenPageAC(page));
//     },
//     setTotalUsersCount(totalCount) {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toggleIsFetching(IsFetching) {
//       dispatch(toggleIsFetchingAC(IsFetching));
//     },
//   };
// };

export default connect(mapStateToProps,
  {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching}
  )(UsersContainer);
