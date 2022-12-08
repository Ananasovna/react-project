import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingInProgress,
} from "../../redux/usersReducer";
import { Users } from "./Users";
import React from "react";
import { Preloader } from "../Preloader/Preloader";
import { usersAPI } from "../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChange = (page) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(page);
    usersAPI.getUsers(page, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  onFollow = (userId) => {
    this.props.toggleFollowingInProgress(true, userId);
    usersAPI.postFollowing(userId).then((data) => {
      if (data.resultCode == 0) {
        this.props.follow(userId);
      }
      this.props.toggleFollowingInProgress(false, userId);
    });
    
  };

  onUnfollow = (userId) => {
    this.props.toggleFollowingInProgress(true, userId);
    usersAPI.deleteFollowing(userId)
      .then((data) => {
        if (data.resultCode == 0) {
          this.props.unfollow(userId);
        }
        this.props.toggleFollowingInProgress(false, userId);
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
          onFollow={this.onFollow}
          onUnfollow={this.onUnfollow}
          toggleFollowingInProgress={this.props.toggleFollowingInProgress}
          followingInProgress={this.props.followingInProgress}
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
    followingInProgress: state.users.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingInProgress
})(UsersContainer);
