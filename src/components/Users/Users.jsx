import styles from './Users.module.css';
import { UserCard } from './UserCard/UserCard';


export const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {id: 1, followed: true, fullName: 'Ann', status: 'Hi there!', location: {city: 'Kaliningrad', country: 'Russia'}, 
      avatarSrc: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'},
      {id: 2, followed: false, fullName: 'Kate', status: 'Whazzzzup?', location: {city: 'Hogwarts', country: 'England'}, 
      avatarSrc: 'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg'},
      {id: 3, followed: true, fullName: 'Peter', status: 'They called me Peter!', location: {city: 'Tortuga', country: 'Carribean sea'}, 
      avatarSrc: 'https://illustrators.ru/uploads/illustration/image/1400706/invisible2.jpg'}
    ])
  }
  
  return (
    <div className={styles.wrapper}>
      {props.users.map(user => <UserCard 
      user={user} 
      follow={props.follow}
      unfollow={props.unfollow}
      key={user.id}/>)}
      <button className={styles.button} >Show more</button>
    </div>
    
  )
}