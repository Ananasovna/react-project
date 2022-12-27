import React, { useState, useEffect } from "react";
import styles from "../UserInfo/ProfileStatus.module.css";

export const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };

  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status || "No status"}
          </span>
        </div>
      ) : (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            className={styles.input}
            value={status}
            type="text"
          />
        </div>
      )}
    </div>
  );
};
