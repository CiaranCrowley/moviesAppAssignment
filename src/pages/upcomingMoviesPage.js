// import React, { useContext } from "react";
import React, {useContext, lazy} from "react";
// import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
// import AddToWatchListButton from '../components/buttons/addToWatchList'

const PageTemplate = lazy(() => import("../components/templateMovieListPage"));
const AddToWatchListButton = lazy(() => import("../components/buttons/addToWatchList"));

const UpcomingMovies = () => {
  const context = useContext(MoviesContext);
  const upcoming = context.upcoming.filter((m) => {
    return !("upcoming" in m);
  });

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={upcoming}
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};

export default UpcomingMovies;