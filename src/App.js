import React, { Suspense } from "react";
import { connect } from "react-redux/es/exports";
import {Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { Music } from "./components/Music/Music";
import { News } from "./components/News/News";
import { Preloader } from "./components/Preloader/Preloader";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { SidebarContainer } from "./components/Sidebar/SidebarContainer";
import { setAuthApp } from "./redux/appReducer";

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

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
            <Suspense fallback={<Preloader/>}>
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
            </Suspense>
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
