import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './pages';
import './index.css';

function Root() {
  return (
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));

// reportWebVitals(console.log);
