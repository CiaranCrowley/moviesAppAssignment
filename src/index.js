import React, { lazy, Suspense  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom" ;
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import SiteHeader from "./components/siteHeader";

const HomePage = lazy(() => import("./pages/homePage"));
const FavoriteMoviesPage = lazy(() => import("./pages/favoritesMoviesPage"));
const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));
const UpcomingMoviesPage = lazy(() => import("./pages/upcomingMoviesPage"));
const MoviesContextProvider = lazy(() => import("./contexts/moviesContext"));
const GenresContextProvider = lazy(() => import("./contexts/genresContext"));
const AddMovieReviewPage = lazy(() => import("./pages/addMovieReviewPage"));
const WatchListPage = lazy(() => import("./pages/watchListPage"));
const PopularMoviesPage = lazy(() => import("./pages/popularMovies"));
const PopularMoviesContextProvider = lazy(() => import("./contexts/popularMoviesContext"));
const TvShowsPage = lazy(() => import("./pages/tvShowsPage"));
const TvShowsContextProvider = lazy(() => import("./contexts/tvContext"));
const TvPage = lazy(() => import("./pages/tvDetailsPage"));
const TvReviewPage = lazy(() => import("./pages/tvReviewPage"));
const TopRatedTv = lazy(() => import("./pages/topRatedTvPage"));
const FavoriteTvShowsPage = lazy(() => import("./pages/favoriteTvShowsPage"));
const AddTvShowReviewPage = lazy(() => import("./pages/addTvShowReviewPage"));
const TvWatchlistPage = lazy(() => import("./pages/tvWatchlistPage"));
const PeopleContextPropvider = lazy(() => import("./contexts/peopleContext"));
const PopularPeoplePage = lazy(() => import("./pages/peoplePage"));
const PersonDetailsPage = lazy(() => import("./pages/personDetailsPage"));
const FavoriteActorsPage = lazy(() => import("./pages/favoriteActorsPage"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader />      
        <div className="container-fluid">
          <Suspense fallback={<h1>Loading page....</h1>}>
            <MoviesContextProvider>
              <PopularMoviesContextProvider>
                <TvShowsContextProvider>
                  <PeopleContextPropvider>
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
                        <Route exact path="/tv/top_rated" component={TopRatedTv} />
                        <Route exact path="/tv/favoriteShows" component={FavoriteTvShowsPage} />
                        <Route exact path="/people/favoriteActors" component={FavoriteActorsPage} />
                        <Route exact path="/tv/tvWatchlist" component={TvWatchlistPage} />
                        <Route path="/people" component={PopularPeoplePage} />
                        <Route path="/movies/:id" component={MoviePage} />
                        <Route path="/tv/:id" component={TvPage} />
                        <Route path="/person/:id" component={PersonDetailsPage} />
                        <Route path="/" component={HomePage} />
                        <Redirect from="*" to="/" />
                      </Switch>
                    </GenresContextProvider>
                  </PeopleContextPropvider>
                </TvShowsContextProvider>
              </PopularMoviesContextProvider>
            </MoviesContextProvider>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));