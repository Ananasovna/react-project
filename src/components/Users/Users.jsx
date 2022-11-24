import styles from './Users.module.css';
import { UserCard } from './UserCard/UserCard';

export let Users = (props) => {
  return (
    <div className={styles.wrapper}>
      {props.users.map(user => <UserCard user={user}/>)}
    </div>
  )
}