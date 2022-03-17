import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProviderWrapper } from './Context/auth.context';

ReactDOM.render(
  <React.StrictMode>
    <AuthProviderWrapper>
        <Router>
          <App />
        </Router>
    </AuthProviderWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
