import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './pages';
// import reportWebVitals from './reportWebVitals';

const GlobalContext = React.createContext();

function Root() {
  return (
    <React.StrictMode>
      <GlobalContext.Provider>
        <Router>
          <App />
        </Router>
      </GlobalContext.Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));

// reportWebVitals(console.log);
