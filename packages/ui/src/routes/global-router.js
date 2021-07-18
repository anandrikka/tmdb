import { Redirect, Route, Switch } from 'react-router-dom';
import NotFound from '../pages/404';
import LandingPage from '../pages/landing';
import MoviesPage from '../pages/movies';
import PeoplePage from '../pages/people';
import TvShowsPage from '../pages/tv-shows';

function GlobalRouter() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/movies" component={MoviesPage} />
      <Route exact path="/tvshows" component={TvShowsPage} />
      <Route exact path="/people" component={PeoplePage} />
      <Redirect from="/home" to="/" />
      <Route path="*" render={NotFound} />
    </Switch>
  );
}

export default GlobalRouter;
