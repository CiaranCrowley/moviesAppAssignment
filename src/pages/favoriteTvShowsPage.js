import React, {useContext} from "react";
import PageTemplate from "../components/templateTVListPage";
import AddTvReviewButton from '../components/buttons/addTvShowReview'
import {TvShowsContext} from '../contexts/tvContext'

const FavoriteShowsPage = props => {
  const context = useContext(TvShowsContext);
  const favoriteShows = context.tvShows.filter( t => t.favoriteShow )
  return (
    <PageTemplate
      tvShows={favoriteShows}
      title={"Favorite Shows"}
      action={tv => <AddTvReviewButton tv={tv} />}
    />
  );
};

export default FavoriteShowsPage;