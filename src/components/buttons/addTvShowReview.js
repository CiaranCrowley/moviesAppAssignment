import React from "react";
import { Link } from "react-router-dom";

const TvShowReviewButton = ({ show }) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/tvShowReviews/tvReviewForm`,
        state: {
          show: show
        }
      }}
    >
      Write a Review
    </Link>
  );
};

export default TvShowReviewButton;