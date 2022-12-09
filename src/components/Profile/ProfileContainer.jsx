import React from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { getProfile } from "../../redux/profileReducer";
import { useParams, useLocation, useNavigate, Navigate } from "react-router-dom";
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
  }

  render() {
    if (!this.props.isAuth) {
      return <Navigate to='/Login' />;
    }

    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile.profile,
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
  connect(mapStateToProps, { getProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);