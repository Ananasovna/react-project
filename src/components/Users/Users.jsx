import styles from './Users.module.css';
import { UserCard } from './UserCard/UserCard';
import axios from 'axios';
import React from 'react';
import { render } from '@testing-library/react';

export class Users extends React.Component {

  constructor(props) {
    super(props);
    alert(1);
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items);
      })
  }
  
  // if (props.users.length === 0) {
  //   props.setUsers([
  //     {id: 1, followed: true, fullName: 'Ann', status: 'Hi there!', location: {city: 'Kaliningrad', country: 'Russia'}, 
  //     avatarSrc: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'},
  //     {id: 2, followed: false, fullName: 'Kate', status: 'Whazzzzup?', location: {city: 'Hogwarts', country: 'England'}, 
  //     avatarSrc: 'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg'},
  //     {id: 3, followed: true, fullName: 'Peter', status: 'They called me Peter!', location: {city: 'Tortuga', country: 'Carribean sea'}, 
  //     avatarSrc: 'https://illustrators.ru/uploads/illustration/image/1400706/invisible2.jpg'}
  //   ])
  // }
  render() {
    return (
      <div className={styles.wrapper}>
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