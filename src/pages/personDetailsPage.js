import React, { lazy } from "react";
import { withRouter } from "react-router-dom";
import usePerson from "../hooks/usePerson";

const PersonDetails = lazy(() => import("../components/personDetails"));
const PageTemplate = lazy(() => import("../components/templatePeoplePage"));
const BackToPeopleList = lazy(() => import("../components/buttons/backToPeopleList"));

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
            <BackToPeopleList></BackToPeopleList>
          </div>
        </div>
      </>
    ) : (
      <p>Waiting for person details</p>
    )}
  </>
  );
};

export default withRouter(PersonPage);