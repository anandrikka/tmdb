import { Route, Switch } from 'react-router-dom';
import NotFound from '../pages/404';
import LandingPage from '../pages/landing';
import MoviePage from '../pages/movie';

function GlobalRouter() {
  return (
    <Switch>
      <Route exact path="/home" render={LandingPage} />
      <Route
        exact
        path="/movie/:movieId"
        render={props => <MoviePage {...props} />}
      />
      <Route path="*" render={NotFound} />
    </Switch>
  );
}

export default GlobalRouter;
