import React from "react";
import styles from './Preloader.module.css';
import preloader from '../assets/img/preloader.gif';


export const Preloader = (props) => {
  return (
    <div className={styles.wrapper}>
      <img src={preloader} alt='prolader' className={styles.preloader} />
    </div>
  )
}