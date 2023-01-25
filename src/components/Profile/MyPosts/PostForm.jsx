import {Field, reduxForm,  change} from 'redux-form';
import { required } from '../../../utils/formValidators';
import { Textarea } from '../../FormControls/FormControls';
import styles from './PostForm.module.css';

export const PostForm = (props) => {
  const onSubmit = (formData) => {
    change('post', 'input', '');
    props.addPost(formData.input);
  }

  return (
    <form onSubmit={props.handleSubmit(onSubmit)}>
      <Field className={styles.input} name='input'  component={Textarea} validate={required}/>
      <button className={styles.button}>Send</button>
    </form>
  )
}

export const PostReduxForm = reduxForm({form: 'post'})(PostForm);