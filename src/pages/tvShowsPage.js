import React, { useContext } from "react";
import PageTemplate from '../components/templateTVListPage'
import {TvShowsContext} from '../contexts/tvContext'
import AddShowToFavoriteButton from '../components/buttons/addShowToFavorites'

const MovieListPage = () => {
  const context = useContext(TvShowsContext);
  const tvShows = context.tvShows.filter((t) => {
    return !("shows" in t);
  });

  return (
    <PageTemplate
      name="No. Shows"
      tvShows={tvShows}
      action={(tv) => {
        return <AddShowToFavoriteButton tv={tv} />;
      }}
    />
  );
};

export default MovieListPage;