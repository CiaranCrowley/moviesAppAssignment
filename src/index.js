import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom" ;
import FavoriteMoviesPage from './pages/favoritesMoviesPage' ;
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage';
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from '../components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import WatchListPage from "./pages/watchListPage";
import PopularMoviesPage from "./pages/popularMovies";
import PopularMoviesContextProvider from "./contexts/popularMoviesContext";
import TvShowsPage from "./pages/tvShowsPage";
import TvShowsContextProvider from "./contexts/tvContext";
import TvPage from './pages/tvDetailsPage';
import TvReviewPage from "./pages/tvReviewPage";
import TvAiringTodayPage from "./pages/tvAiringTodayPage";
import FavoriteTvShowsPage from "./pages/favoriteTvShowsPage";
import AddTvShowReviewPage from './pages/addTvShowReviewPage';


const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader />      
        <div className="container-fluid">
          <MoviesContextProvider>
            <PopularMoviesContextProvider>
              <TvShowsContextProvider>
                <GenresContextProvider>
                  <Switch>
                    <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                    <Route exact path="/tvShowReviews/tvReviewForm" component={AddTvShowReviewPage} />
                    <Route path="/reviews/:id" component={MovieReviewPage} />
                    <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                    <Route exact path="/movies/watchList" component={WatchListPage} />
                    <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                    <Route exact path="/movies/popular" component={PopularMoviesPage} />
                    <Route exact path="/tv" component={TvShowsPage} />
                    <Route exact path="/tvReviews/:id" component={TvReviewPage} />
                    <Route exact path="/tv/airing_today" component={TvAiringTodayPage} />
                    <Route exact path="/tv/favoriteShows" component={FavoriteTvShowsPage} />
                    <Route path="/movies/:id" component={MoviePage} />
                    <Route path="/tv/:id" component={TvPage} />
                    <Route path="/" component={HomePage} />
                    <Redirect from="*" to="/" />
                  </Switch>
                </GenresContextProvider>
              </TvShowsContextProvider>
            </PopularMoviesContextProvider>
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));