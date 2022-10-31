import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Profile } from './components/Profile/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar state={props.state.dialogs.dialogsData} />
        <main className="main">
          <Routes>
            <Route path="/" element={<Profile state={props.state.profile}/>}/>
            <Route path="/Profile" element={<Profile state={props.state.profile}/>}/>
            <Route path="/Dialogs/*" element={<Dialogs state={props.state.dialogs}/>}/>
            <Route path="/News" element={<News />}/>
            <Route path="/Music" element={<Music />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
