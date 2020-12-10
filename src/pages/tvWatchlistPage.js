// import React, {useContext} from "react";
import React, {useContext, lazy} from "react";
// import PageTemplate from "../components/templateTVListPage";
// import AddTvShowReviewButton from '../components/buttons/addTvShowReview'
import {TvShowsContext} from '../contexts/tvContext'

const PageTemplate = lazy(() => import("../components/templateTVListPage"));
const AddTvShowReviewButton = lazy(() => import("../components/buttons/addTvShowReview"));

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