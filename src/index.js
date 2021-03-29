import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import AuthProvider from './providers/AuthProvider';
import { BrowserRouter as Router } from 'react-router-dom'
import './style/main.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);