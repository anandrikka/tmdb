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
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={Landing} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
