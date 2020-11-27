import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import PageTemplate from "../components/templateTvPage";
import TvReviews from "../components/tvReviews";
import useTv from "../hooks/useTv";

const TvPage = props => {
  const { id } = props.match.params;
  const [show] = useTv(id)  // NEW
  return (
    <>
    {show ? (
      <>
        <PageTemplate tv={show}>
          <TvDetails tv={show} />
        </PageTemplate>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/tv/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/tv/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/tv/:id/reviews`}
          render={props => <TvReviews tv={show} {...props} />}
        />
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default withRouter(TvPage);