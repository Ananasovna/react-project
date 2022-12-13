import {Field, reduxForm} from 'redux-form';
import styles from './LoginForm.module.css';

export const LoginForm = (props) => {
  return <div>
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='email' placeholder='Login' component='input'/>
      </div>
      <div>
        <Field name='password' placeholder='Password' component='input'/>
      </div>
      <div>
        <Field name='rememberMe' type='checkbox' component='input'/>Remember me
      </div>
      <button className={styles.button}>Log in</button>
    </form>
  </div>
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)