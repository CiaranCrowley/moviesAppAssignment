// import React, { useContext } from "react";
import React, {useContext, lazy} from "react";
// import PageTemplate from '../components/templateTVListPage'
import {TvShowsContext} from '../contexts/tvContext'
// import AddShowToFavoriteButton from '../components/buttons/addShowToFavorites'

const PageTemplate = lazy(() => import("../components/templateTVListPage"));
const AddShowToFavoriteButton = lazy(() => import("../components/buttons/addShowToFavorites"));

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