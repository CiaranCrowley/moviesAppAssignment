import React from "react";
import PageTemplate from "../components/templateTvPage";

const ReviewFormPage = props => {

  return (
      <PageTemplate tv={props.location.state.tv}>
          <h3>Placeholder for web form</h3>
      </PageTemplate>
  );
};
export default ReviewFormPage;