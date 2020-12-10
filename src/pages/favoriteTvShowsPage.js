// import React, { useContext } from "react";
import React, {useContext, lazy} from "react";
//import PageTemplate from "../components/templateTVListPage";
// import AddTvReviewButton from '../components/buttons/addTvShowReview'
import {TvShowsContext} from '../contexts/tvContext'

const PageTemplate = lazy(() => import("../components/templateTVListPage"));
const AddTvReviewButton = lazy(() => import("../components/buttons/addTvShowReview"));

const FavoriteShowsPage = () => {
  const context = useContext(TvShowsContext);
  const favoriteShows = context.tvShows.filter( t => t.favoriteShow )
  return (
    <PageTemplate
      tvShows={favoriteShows}
      name={"Favorite Tv Shows"}
      action={tv => <AddTvReviewButton tv={tv} />}
    />
  );
};

export default FavoriteShowsPage;