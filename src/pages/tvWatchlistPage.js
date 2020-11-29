import React, {useContext} from "react";
import PageTemplate from "../components/templateTVListPage";
import AddTvShowReviewButton from '../components/buttons/addTvShowReview'
import {TvShowsContext} from '../contexts/tvContext'


const WatchListPage = () => {
  const context = useContext(TvShowsContext);
  const tvWatchlist = context.topRatedTv.filter( m => m.topRatedTv )
  return ( console.log(tvWatchlist),
    <PageTemplate
      tvShows={tvWatchlist}
      name={"Watch List"}
      action={tv => <AddTvShowReviewButton tv={tv} />}
    />
  );
};

export default WatchListPage;