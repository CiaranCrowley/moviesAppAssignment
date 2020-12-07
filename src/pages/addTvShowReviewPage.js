import React from "react";
import PageTemplate from "../components/templateTvPage";
import TvReviewForm from '../components/tvReviewForm'

const TvReviewFormPage = props => {

  return (
      <PageTemplate tv={props.location.state.tv}>
          <TvReviewForm tv={props.location.state.tv} />
      </PageTemplate>
  );
};
export default TvReviewFormPage;