import {Field, reduxForm} from 'redux-form';
import styles from './PostForm.module.css';

export const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} action=''>
      <Field className={styles.input} name='input' component='textarea'></Field>
      <button className={styles.button}>Send</button>
    </form>
  )
}

export const PostReduxForm = reduxForm({form: 'post'})(PostForm);