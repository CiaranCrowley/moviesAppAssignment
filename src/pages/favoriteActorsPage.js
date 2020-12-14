import React, {useContext, lazy} from "react";
import {PeopleContext} from '../contexts/peopleContext'

const PageTemplate = lazy(() => import("../components/templatePeopleListPage"));
const AddReviewButton = lazy(() => import("../components/buttons/addReview"));

const FavoriteMoviesPage = () => {
  const context = useContext(PeopleContext);
  const favoriteActor = context.people.filter( m => m.favoriteActor )
  return (
    <PageTemplate
      people={favoriteActor}
      name={"Favorite Actors"}
      action={person => <AddReviewButton person={person} />}
    />
  );
};

export default FavoriteMoviesPage;