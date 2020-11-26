import React, { useContext } from "react";
import PageTemplate from '../components/templateTVListPage'
import {TvShowsContext} from '../contexts/tvContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const MovieListPage = () => {
  const context = useContext(TvShowsContext);
  const tvShows = context.tvShows.filter((t) => {
    return !("shows" in t);
  });

  return (
    <PageTemplate
      title="No. Shows"
      tvShows={tvShows}
      action={(tv) => {
        return <AddToFavoritesButton tv={tv} />;
      }}
    />
  );
};

export default MovieListPage;