import './App.css';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { Header } from './components/Header/Header';
import { SidebarContainer } from './components/Sidebar/SidebarContainer';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Profile } from './components/Profile/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        {/* <Sidebar state={props.state.dialogs.dialogsData} /> */}
        <SidebarContainer />
        <main className="main">
          <Routes>
            <Route path="/" element={<Profile />}/>
            <Route path="/Profile" element={<Profile />}/>
            <Route path="/Dialogs/*" element={<DialogsContainer />}/>
            <Route path="/News" element={<News />}/>
            <Route path="/Music" element={<Music />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
