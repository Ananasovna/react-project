import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerender = (state, addPost) => {
  
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost}/>
    </React.StrictMode>
  );
}

