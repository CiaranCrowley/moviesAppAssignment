// import React from "react";
import React, { lazy } from "react";
// import PageTemplate from '../components/templateMoviePage'
// import MovieReview from "../components/movieReview";

const PageTemplate = lazy(() => import("../components/templateMoviePage"));
const MovieReview = lazy(() => import("../components/movieReview"));

const MovieReviewPage = (props) => {
  return (
      <PageTemplate movie={props.location.state.movie}>
        <MovieReview review={props.location.state.review} /> 
      </PageTemplate>
  );
};

export default MovieReviewPage;