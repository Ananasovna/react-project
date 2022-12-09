import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToProps = (state) => {
  return {isAuth: state.auth.isAuth}
}

export const withAuthRedirect = (Component) => {
  
  class AuthRedirectComponent extends React.Component {
    
    render () {
      if (!this.props.isAuth) {
        return <Navigate to='/Login' />;
      }
      return <Component {...this.props} /> 
    }
    
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToProps)(AuthRedirectComponent);
  return ConnectedAuthRedirectComponent;
}