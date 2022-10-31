import { FriendCard } from '../FriendCard/FriendCard';
import classes from './Friends.module.css';

export const Friends = (props) => {
  return(
    <div className={classes.friends}>
        <h2 className={classes.h2}>My friends</h2>
        <div className={classes.cardsWrapper}>
        <FriendCard state={props.state[1]}/>
        <FriendCard state={props.state[2]}/>
        <FriendCard state={props.state[3]}/>
        </div>

    </div>
  );
}