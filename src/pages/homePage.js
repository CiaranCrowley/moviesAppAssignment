// import React, { useContext } from "react";
import React, {useContext, lazy} from "react";
// import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
// import AddToFavoritesButton from '../components/buttons/addToFavorites'

const PageTemplate = lazy(() => import("../components/templateMovieListPage"));
const AddToFavoritesButton = lazy(() => import("../components/buttons/addToFavorites"));

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => {
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};

export default MovieListPage;