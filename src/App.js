import React from "react";
import { connect } from "react-redux/es/exports";
import {Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { Music } from "./components/Music/Music";
import { News } from "./components/News/News";
import { Preloader } from "./components/Preloader/Preloader";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { SidebarContainer } from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { setAuthApp } from "./redux/appReducer";

class App extends React.Component {
  componentDidMount() {
    this.props.setAuthApp();
  }

  render() {
    if (!this.props.authCompleted) {
      return <Preloader />
    }

    return (
        <div className="app-wrapper">
          <HeaderContainer />
          <SidebarContainer />
          <main className="main">
            <Routes>
              <Route path="/" element={<ProfileContainer />} />
              <Route path="/Profile/:userId" element={<ProfileContainer />} />
              <Route path="/Profile" element={<ProfileContainer />} />
              <Route path="/Dialogs/*" element={<DialogsContainer />} />
              <Route path="/News" element={<News />} />
              <Route path="/Music" element={<Music />} />
              <Route path="/Users" element={<UsersContainer />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </main>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authCompleted: state.app.authCompleted,
  }
}

export default connect(mapStateToProps, {setAuthApp})(App);
