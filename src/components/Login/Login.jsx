import React from 'react';
import { LoginReduxForm } from './LoginForm';
import styles from './Login.module.css';
import {login} from '../../redux/authReducer';
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom';

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }

  if (props.isAuth) {
    return <Navigate to='/Profile' />
  }

  return <div>
    <h1 className={styles.h1}>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
  </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(Login);