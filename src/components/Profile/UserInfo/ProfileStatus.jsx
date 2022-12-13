import React from "react";
import styles from '../UserInfo/ProfileStatus.module.css';

export class ProfileStaus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  }

  activateEditMode = () => {
    this.setState({editMode: true})
  }

  deactivateEditMode = () => {
    this.setState({editMode: false});
    this.props.updateUserStatus(this.state.status);
  }

  onStatusChange = (event) => {
    this.setState({
      status: event.currentTarget.value
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.status !== prevState.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode ?
        <div>
          <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
        </div>
        :
        <div>
          <input 
          onChange={this.onStatusChange} 
          autoFocus={true} 
          onBlur={this.deactivateEditMode} 
          className={styles.input}
          value={this.state.status} type="text" />
        </div>}
      </div>
    );
  }
}

export default ProfileStaus;
