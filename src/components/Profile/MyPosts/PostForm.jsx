import {Field, reduxForm,  change} from 'redux-form';
import { required } from '../../../utils/formValidators';
import { Textarea } from '../../FormControls/FormControls';
import styles from './PostForm.module.css';

export const PostForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field className={styles.input} name='input'  component={Textarea} validate={required}/>
      <button className={styles.button}>Send</button>
    </form>
  )
}

export const PostReduxForm = reduxForm({form: 'post'})(PostForm);