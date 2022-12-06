import './App.css';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { Header } from './components/Header/Header';
import { SidebarContainer } from './components/Sidebar/SidebarContainer';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <SidebarContainer />
        <main className="main">
          <Routes>
            <Route path="/" element={<ProfileContainer />}/>
            <Route path="/Profile/:userId" element={<ProfileContainer />}/>
            <Route path="/Profile" element={<ProfileContainer />}/>
            <Route path="/Dialogs/*" element={<DialogsContainer />}/>
            <Route path="/News" element={<News />}/>
            <Route path="/Music" element={<Music />}/>
            <Route path="/Users" element={<UsersContainer />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
