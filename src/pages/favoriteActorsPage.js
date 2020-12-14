import React, {useContext, lazy} from "react";
import {PeopleContext} from '../contexts/peopleContext'

const PageTemplate = lazy(() => import("../components/templatePeopleListPage"));
const BackToPeopleList = lazy(() => import("../components/buttons/backToPeopleList"));

const FavoriteMoviesPage = () => {
  const context = useContext(PeopleContext);
  const favoriteActor = context.people.filter( m => m.favoriteActor )
  return (
    <PageTemplate
      people={favoriteActor}
      name={"Favorite Actors"}
      action={person => <BackToPeopleList person={person} />}
    />
  );
};

export default FavoriteMoviesPage;