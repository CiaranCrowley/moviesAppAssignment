// import React, { useContext } from "react";
import React, { lazy } from "react";
// import PageTemplate from "../components/templateTvPage";
// import TvReviewForm from '../components/tvReviewForm'

const PageTemplate = lazy(() => import("../components/templateTvPage"));
const TvReviewForm = lazy(() => import("../components/tvReviewForm"));

const TvReviewFormPage = props => {

  return (
      <PageTemplate tv={props.location.state.tv}>
          <TvReviewForm tv={props.location.state.tv} />
      </PageTemplate>
  );
};
export default TvReviewFormPage;