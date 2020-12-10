import React, { lazy, Suspense  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom" ;
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import SiteHeader from "./components/siteHeader";

//import HomePage from "./pages/homePage";
//import FavoriteMoviesPage from "./pages/favoritesMoviesPage" ;
//import MoviePage from "./pages/movieDetailsPage";
//import MovieReviewPage from "./pages/movieReviewPage";
//import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
//import MoviesContextProvider from "./contexts/moviesContext";
//import GenresContextProvider from "./contexts/genresContext";
//import AddMovieReviewPage from "./pages/addMovieReviewPage";
//import WatchListPage from "./pages/watchListPage";
//import PopularMoviesPage from "./pages/popularMovies";
//import PopularMoviesContextProvider from "./contexts/popularMoviesContext";
//import TvShowsPage from "./pages/tvShowsPage";
//import TvShowsContextProvider from "./contexts/tvContext";
//import TvPage from "./pages/tvDetailsPage";
//import TvReviewPage from "./pages/tvReviewPage";
//import TopRatedTv from "./pages/topRatedTvPage";
//import FavoriteTvShowsPage from "./pages/favoriteTvShowsPage";
//import AddTvShowReviewPage from "./pages/addTvShowReviewPage";
//import TvWatchlistPage from "./pages/tvWatchlistPage";

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
                      <Route exact path="/tv/favoriteShows" component={FavoriteTvShowsPage} />.
                      <Route exact path="/tv/tvWatchlist" component={TvWatchlistPage} />,
                      <Route path="/movies/:id" component={MoviePage} />
                      <Route path="/tv/:id" component={TvPage} />
                      <Route path="/" component={HomePage} />
                      <Redirect from="*" to="/" />
                    </Switch>
                  </GenresContextProvider>
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