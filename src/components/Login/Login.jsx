import React from 'react';
import { LoginReduxForm } from './LoginForm';
import styles from './Login.module.css';
import {authAPI} from '../api/api';

export const Login = (props) => {
  const onSubmit = (formData) => {
    authAPI.postLoginData(formData);
  }

  return <div>
    <h1 className={styles.h1}>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

