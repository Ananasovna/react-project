import React from 'react';
import { LoginReduxForm } from './LoginForm';
import styles from './Login.module.css';
import {login} from '../../redux/authReducer';
import { connect } from "react-redux";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe = false);
  }

  return <div>
    <h1 className={styles.h1}>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

const mapStateToProps = (state) => {
  {
    isAuth: state.auth.isAuth;
  }
}

export default connect(mapStateToProps, {login})(Login);