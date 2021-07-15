import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import useReducerWithContext from './hooks/useReducerWithMemo';
import App from './pages';
import { GlobalContext } from './store/define-context';
import globalReducer, {
  initialState as globalState,
} from './store/reducers/root-reducer';
import './index.css';

function Root() {
  const contextValue = useReducerWithContext(globalReducer, globalState);
  return (
    <React.StrictMode>
      <GlobalContext.Provider value={contextValue}>
        <Router>
          <App />
        </Router>
      </GlobalContext.Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));

// reportWebVitals(console.log);
