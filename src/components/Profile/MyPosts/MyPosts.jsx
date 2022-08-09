import classes from './MyPosts.module.css';
import {Post} from './Post/Post';

export const MyPosts = () => {
  const postsData = [
    {id: 1, text: 'How are you?', likeCounter: '53'},
    {id: 2, text: 'What a good day!', likeCounter: '2'},
    {id: 3, text: "It's my first post", likeCounter: '10'}
  ]

  return (
    <div className={classes.posts}>
      <div className={classes.inputWrapper}>
        <div className={classes.h2}>My posts</div>
        <textarea className={classes.input}></textarea>
        <button className={classes.button}>Send</button>
      </div>
      <Post text={postsData[0].text} likeCounter={postsData[0].likeCounter}/>
      <Post text={postsData[1].text} likeCounter={postsData[1].likeCounter}/>
      <Post text={postsData[2].text} likeCounter={postsData[2].likeCounter}/>
    </div>
  );
}