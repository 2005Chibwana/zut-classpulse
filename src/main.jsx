// Entry point: loads the theme and global styles first (so each component's own CSS can refine
// them), then shows the App on the page.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/theme.css';
import './styles/global.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
