import React, { useContext } from "react";
import {PeopleContext} from "../../contexts/peopleContext";

const AddToFavoriteButton = ({ person }) => {
  const context = useContext(PeopleContext);

  const handleAddToFavoriteActors = e => {
    e.preventDefault();
    context.addToFavoriteActors(person.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavoriteActors}
    >
      Add to Favorite Actors
    </button>
  );
};

export default AddToFavoriteButton;