import styles from "./DialogForm.module.css";
import {Field, reduxForm} from 'redux-form';
import { Textarea } from "../FormControls/FormControls";
import { required } from "../../utils/formValidators";

export const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.form} action="">
      <Field
        value={props.newMessageText}
        name="newText"
        className={styles.textarea}
        component={Textarea}
        validate={required}
      ></Field>
      <button className={styles.textareaButton}>Send</button>
    </form>
  );
};

export const DialogReduxForm = reduxForm({form: 'message'})(MessageForm)
