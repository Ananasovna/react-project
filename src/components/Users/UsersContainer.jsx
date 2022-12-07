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
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {withCredentials: true}
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
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
        {withCredentials: true}
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  onFollow = (userId) => {
    axios
      .post(
        `https://social-network.samuraijs.com/api/1.0//follow/${userId}`, {},
        {withCredentials: true,
        headers: {'API-KEY': 'dd182d82-a56b-4b62-b533-6748f9cec43d'}}
      )
      .then((response) => {
        if (response.data.resultCode == 0) {
          this.props.follow(userId);
        }
      });
  }

  onUnfollow = (userId) => {
    axios
      .delete(
        `https://social-network.samuraijs.com/api/1.0//follow/${userId}`,
        {withCredentials: true,
        headers: {'API-KEY': 'dd182d82-a56b-4b62-b533-6748f9cec43d'}}
      )
      .then((response) => {
        if (response.data.resultCode == 0) {
          this.props.unfollow(userId);
        }
      });
  }

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

export default connect(mapStateToProps,
  {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching}
  )(UsersContainer);
