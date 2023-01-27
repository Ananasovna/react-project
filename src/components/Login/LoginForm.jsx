import {Field, reduxForm} from 'redux-form';
import { maxLengthCreator, minLengthCreator, required } from '../../utils/formValidators';
import styles from './LoginForm.module.css';
import { Input } from '../FormControls/FormControls';

const maxLength50 = maxLengthCreator(50);
const minLength6 = minLengthCreator(6);

export const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return <div>
    <form onSubmit={handleSubmit}>
      <div>
        <Field name='email' placeholder='Email' type='email' component={Input} validate={[required, maxLength50]}/>
      </div>
      <div>
        <Field name='password' placeholder='Password' type='password' component={Input} validate={[required, minLength6]}/>
      </div>
      <div>
        <Field name='rememberMe' type='checkbox' component={Input} />
        <label htmlFor='rememberMe'>Remember me</label>
      </div>
      {error && <div className={styles.error}>{error}</div>}
      {captchaUrl &&
      <div>
        <img src={captchaUrl} alt="captcha" />
        <Field name='captcha' component={Input} validate={[required]}/>
      </div>}
      <button className={styles.button}>Log in</button>
    </form>
  </div>
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);