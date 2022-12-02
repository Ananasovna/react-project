import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setCurrenPageAC, setTotalUsersCountAC } from "../../redux/usersReducer";
import { Users } from "./Users";
import axios from 'axios';
import React from 'react';

class UsersContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        console.log(this.props.totalUsersCount);
      })
  }

  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      })
  }

  render() {
    return <Users totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      onPageChange={this.onPageChange}
      currentPage={this.props.currentPage}
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}/>
    
  }
  
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);