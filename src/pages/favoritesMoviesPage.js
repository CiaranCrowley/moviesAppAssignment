// import React, { useContext } from "react";
import React, {useContext, lazy} from "react";
//import MovieListPageTemplate from "../components/templateMovieListPage";
// import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const MovieListPageTemplate = lazy(() => import("../components/templateMovieListPage"));
const AddReviewButton = lazy(() => import("../components/buttons/addReview"));

const FavoriteMoviesPage = props => {
  const context = useContext(MoviesContext);
  const favorites = context.movies.filter( m => m.favorite )
  return (
    <MovieListPageTemplate
      movies={favorites}
      title={"Favorite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default FavoriteMoviesPage;