import classes from './Post.module.css';

export const Post = (props) => {
  return (
    <article className={classes.post}>
      <img className={classes.img} src="https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg"></img>
      <p className={classes.text}>{props.text}</p>
      <div className={classes.like}>Like: {props.likeCounter}</div>
    </article>
  );
}