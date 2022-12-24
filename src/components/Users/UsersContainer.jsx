import { connect } from "react-redux";
import { follow, unfollow, requestUsers, getMoreUsers } from "../../redux/usersReducer";
import { Users } from "./Users";
import React from "react";
import { Preloader } from "../Preloader/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { getUsers, getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount } from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (page) => {
    this.props.getUsers(page, this.props.pageSize);
  };

  showMoreUsers = (page) => {
    this.props.getMoreUsers(page);
    this.props.getUsers(this.props.currentPage, page);
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
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
          showMoreUsers={this.showMoreUsers}
        />
      </div>
    );
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.users.usersData,
//     pageSize: state.users.pageSize,
//     totalUsersCount: state.users.totalUsersCount,
//     currentPage: state.users.currentPage,
//     isFetching: state.users.isFetching,
//     followingInProgress: state.users.followingInProgress,
//   };
// };

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, { follow, unfollow, getUsers: requestUsers, getMoreUsers }),
  withAuthRedirect
)(UsersContainer)