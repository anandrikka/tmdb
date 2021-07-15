import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/header';
import Landing from './landing';
import NotFound from './404';

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" render={Landing} />
        <Route exact path="/about" render={Landing} />
        <Route path="*" render={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
