import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerender = (state, functions) => {
  
  root.render(
    <React.StrictMode>
      <App state={state} functions={functions}/>
    </React.StrictMode>
  );
}

