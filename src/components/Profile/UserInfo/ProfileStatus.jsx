import React from "react";
import styles from '../UserInfo/ProfileStatus.module.css';

export class ProfileStaus extends React.Component {
  state = {
    editMode: false,
  }

  activateEditMode = () => {
    this.setState({editMode: true})
  }

  deactivateEditMode = () => {
    this.setState({editMode: false})
  }

  render() {
    return (
      <div>
        {!this.state.editMode ?
        <div>
          <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
        </div>
        :
        <div>
          <input autoFocus={true} onBlur={this.deactivateEditMode} className={styles.input}value={this.props.status} type="text" />
        </div>}
      </div>
    );
  }
}

export default ProfileStaus;
