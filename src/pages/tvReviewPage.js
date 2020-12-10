// import React from "react";
import React, { lazy } from "react";
// import PageTemplate from '../components/templateTvPage'
// import TvReview from "../components/tvReview";

const PageTemplate = lazy(() => import("../components/templateTvPage"));
const TvReview = lazy(() => import("../components/tvReview"));

const MovieReviewPage = (props) => {
  return (
      <PageTemplate tv={props.location.state.tv}>
        <TvReview review={props.location.state.review} /> 
      </PageTemplate>
  );
};

export default MovieReviewPage;