import React, { lazy } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import usePerson from "../hooks/usePerson";

const PersonDetails = lazy(() => import("../components/personDetails"));
const PageTemplate = lazy(() => import("../components/templatePeoplePage"));
const MovieReviews = lazy(() => import("../components/movieReviews"));

const PersonPage = props => {
  const { id } = props.match.params;
  const [person] = usePerson(id)  // NEW
  return (
    <>
    {person ? (
      <>
        <PageTemplate person={person}>
          <PersonDetails person={person} />
        </PageTemplate>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/people/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/people/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/people/:id/reviews`}
          render={props => <MovieReviews person={person} {...props} />}
        />
      </>
    ) : (
      <p>Waiting for person details</p>
    )}
  </>
  );
};

export default withRouter(PersonPage);