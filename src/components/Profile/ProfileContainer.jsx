import React from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { getProfile, getUserStatus, updateUserStatus, saveAvatar } from "../../redux/profileReducer";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from "redux";

class ProfileContainer extends React.Component {

  refreshProfile = () => {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authorisedUsrId;
    }
    this.props.getProfile(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.router.params.userId != prevProps.router.params.userId) {
      this.refreshProfile();
    }

  }

  render() {
    return <Profile {...this.props} 
    isOwner={!this.props.router.params.userId}
    profile={this.props.profile} 
    updateUserStatus={this.props.updateUserStatus} 
    status={this.props.status}
    saveAvatar={this.props.saveAvatar}
    refreshProfile={this.refreshProfile}
    />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile.profile,
  status: state.profile.status,
  authorisedUsrId: state.auth.userId,
});

export const withRouter = (Component) => {
  return (function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  });
};

export default compose(
  connect(mapStateToProps, { getProfile, getUserStatus, updateUserStatus, saveAvatar }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);