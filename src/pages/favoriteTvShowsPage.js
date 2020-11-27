import React, {useContext} from "react";
import PageTemplate from "../components/templateTVListPage";
import AddReviewButton from '../components/buttons/addReview'
import {TvShowsContext} from '../contexts/tvContext'

const FavoriteShowsPage = props => {
  const context = useContext(TvShowsContext);
  const favoriteShows = context.tvShows.filter( t => t.favoriteShow )
  return (
    <PageTemplate
      tvShows={favoriteShows}
      title={"Favorite Shows"}
      action={tv => <AddReviewButton tv={tv} />}
    />
  );
};

export default FavoriteShowsPage;