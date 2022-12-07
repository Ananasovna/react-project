import styles from './Users.module.css';
import { UserCard } from './UserCard/UserCard';


export const Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
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
          return <span onClick={() => {props.onPageChange(page)}} key= {page} className={props.currentPage === page ? styles.activePage : undefined}>{page}</span>
        })}
      </div>
      {props.users.map(user => <UserCard 
      user={user} 
      onFollow={props.onFollow}
      onUnfollow={props.onUnfollow}
      key={user.id}/>)}
      <button className={styles.button} >Show more</button>
    </div>
  )
  
}