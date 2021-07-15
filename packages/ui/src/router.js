import { Route, Router } from 'react-router-dom';
import Landing from './pages/landing';

function RootRouter() {
  return (
    <Router>
      <Route path="/" component={Landing} exact />
      <Route path="/about" component={Landing} exact />
    </Router>
  );
}

export default RootRouter;
