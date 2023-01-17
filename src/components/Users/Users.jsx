import styles from './Users.module.css';
import { UserCard } from './UserCard/UserCard';
import { Pagination } from '../Pagination/Pagination';


export const Users = ({currentPage, totalUsersCount, pageSize, onPageChange, users, ...props}) => {
  return (
    <div className={styles.wrapper}>
      <Pagination 
      totalUsersCount={totalUsersCount}
      pageSize={pageSize}
      onPageChange={onPageChange}
      currentPage={currentPage}/>
      {users.map(user => <UserCard 
      user={user} 
      follow={props.follow}
      unfollow={props.unfollow}
      key={user.id}
      followingInProgress={props.followingInProgress}/>)}
      <button className={styles.button} onClick={() => props.showMoreUsers(props.pageSize)}>Show more</button>
    </div>
  )
  
}