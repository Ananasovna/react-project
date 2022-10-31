import classes from './FriendCard.module.css';

export const FriendCard = (props) => {
  return(
    <div className={classes.friendCard}>
      <img className={classes.img} src={props.state.avatarSrc} alt='avatar' />
      <h3 className={classes.name}>{props.state.name}</h3>
    </div>
  );
}