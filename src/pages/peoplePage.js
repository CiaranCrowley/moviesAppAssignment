import React, {useContext, lazy} from "react";
import {PeopleContext} from '../contexts/peopleContext'

const PageTemplate = lazy(() => import("../components/templatePeopleListPage"));
const AddFavoriteActorButton = lazy(() => import("../components/buttons/addFavoritePeople"));

const PeoplePage = () => {
    const context = useContext(PeopleContext);
    const popularPeople = context.people.filter((m) => {
        return !("people" in m);
    });

    return(
        <PageTemplate
            name="Popular People"
            people={popularPeople}
            action={person => {
                return <AddFavoriteActorButton person={person} />;
              }}
        />
    );
};

export default PeoplePage;