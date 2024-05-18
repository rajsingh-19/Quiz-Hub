import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import { AuthProvider } from './context/Auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/*     Wrapping the parent node so that route can be establish and user can navigate anywhere in the website */}
    <Router>
{/*     Implementing the authorisation to users for playing the quiz */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

