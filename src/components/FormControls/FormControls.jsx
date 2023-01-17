import React from "react";
import styles from "./FormControls.module.css";

export const Input = ({ input, meta: {touched, error}, child, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.inputWrapper + " " + (hasError ? styles.error : "")}
      >
        <input {...input} {...props} />
      </div>
      {hasError && (
        <div className={styles.spanBlock}>
          <div className={styles.spanWrapperTriangle}></div>
          <div className={styles.spanWrapper}>
            <span>{error}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export const Textarea = ({ input, meta, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <textarea {...input} {...props} />
    </div>
  );
};
