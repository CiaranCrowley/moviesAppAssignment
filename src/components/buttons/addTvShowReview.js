import React from "react";
import { Link } from "react-router-dom";

const TvShowReviewButton = ({ tv }) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/tvShowReviews/tvReviewForm`,
        state: {
          tv: tv
        }
      }}
    >
      Write a Review
    </Link>
  );
};

export default TvShowReviewButton;