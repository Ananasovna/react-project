import { Field, reduxForm } from "redux-form";
import styles from "./PersonalUserInfo.module.css";
import { OkIcon } from "../../assets/icons/OkIcon";
import { Input } from "../../FormControls/FormControls";
import { required } from "../../../utils/formValidators";

const PersonalUserInfoForm = ({ handleSubmit, profile, isOwner, error }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <div className={styles.personalInfo}>
        <Field name="fullName" className={styles.h3} component={Input}></Field>
        <div className={styles.infoWrapper}>
          <div className={styles.inputWrapper}>
            <label htmlFor="aboutMe">About me: </label>
          <Field
            name="aboutMe"
            component={Input}
            validate={[required]}
            style={styles.errorSpan}
          ></Field>
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="contacts.website">Website: </label>
          <Field
            name="contacts.website"
            className={styles.info}
            component={Input}
          ></Field>
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="lookingForAJobDescription">About job: </label>
          <Field
            name="lookingForAJobDescription"
            component={Input}
            validate={[required]}
            style={styles.errorSpan}
          ></Field>
          </div>
        </div>
      </div>
      <div className={styles.jobInfo}>
        {profile.lookingForAJob ? "Job wanted" : "Employed"}
      </div>
      {isOwner && (
        <button className={styles.settingsButton}>
          <OkIcon />
        </button>
      )}
      {error && (
        <div className={styles.spanBlock}>
          <div className={styles.spanWrapperTriangle}></div>
          <div className={styles.spanWrapper}>
            <span>{error}</span>
          </div>
        </div>
      )}
    </form>
  );
};

const PersonalUserInfoReduxForm = reduxForm({ form: "editUserInfo" })(
  PersonalUserInfoForm
);

export default PersonalUserInfoReduxForm;
