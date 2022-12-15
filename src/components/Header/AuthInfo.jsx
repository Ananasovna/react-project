import styles from './AuthInfo.module.css';

export const AuthInfo = (props) => {
  return (
    <div className={styles.authInfo}>
      <div>{props.login}</div>
      <button onClick={props.logout}>Log out</button>
    </div>
  )
}