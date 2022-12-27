import React, { useState } from "react";
import styles from '../UserInfo/ProfileStatus.module.css';

export const ProfileStatus = (props) => {
  // state = {
  //   editMode: false,
  //   status: this.props.status,
  // }

  // activateEditMode = () => {
  //   this.setState({editMode: true})
  // }

  // deactivateEditMode = () => {
  //   this.setState({editMode: false});
  //   this.props.updateUserStatus(this.state.status);
  // }

  // onStatusChange = (event) => {
  //   this.setState({
  //     status: event.currentTarget.value
  //   })
  // }

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (this.props.status !== prevState.status) {
  //     this.setState({
  //       status: this.props.status
  //     })
  //   }
  // }

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
      setEditMode(true);
    }

    const deactivateEditMode = () => {
      setEditMode(false);
      props.updateUserStatus(status);
    }

    const onStatusChange = (event) => {
      setStatus(event.currentTarget.value)
      }


    return (
      <div>
        {!editMode ?
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
        </div>
        :
        <div>
          <input 
          onChange={onStatusChange} 
          autoFocus={true} 
          onBlur={deactivateEditMode} 
          className={styles.input}
          value={status} type="text" />
        </div>}
      </div>
    );
}

