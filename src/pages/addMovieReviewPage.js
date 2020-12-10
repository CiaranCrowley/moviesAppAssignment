import React, { lazy } from "react";
//import PageTemplate from "../components/templateMoviePage";
//import ReviewForm from '../components/reviewForm'

const PageTemplate = lazy(() => import("../components/templateMoviePage"));
const ReviewForm = lazy(() => import("../components/reviewForm"));

const ReviewFormPage = props => {

  return (
      <PageTemplate movie={props.location.state.movie}>
          <ReviewForm movie={props.location.state.movie} />
      </PageTemplate>
  );
};
export default ReviewFormPage;