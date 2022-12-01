import styles from './Users.module.css';
import { UserCard } from './UserCard/UserCard';
import axios from 'axios';
import React from 'react';

export class Users extends React.Component {

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
    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
      if (pages.length < 20) {
        pages.push(i);
      }
      
    }

    return (
      <div className={styles.wrapper}>
        <div className={styles.paginationWrapper}>
          {pages.map(page => {
            return <span onClick={() => {this.onPageChange(page)}} key= {page} className={this.props.currentPage === page ? styles.activePage : false}>{page}</span>
          })}
        </div>
        {this.props.users.map(user => <UserCard 
        user={user} 
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        key={user.id}/>)}
        <button className={styles.button} >Show more</button>
      </div>
    )
  }
  
}