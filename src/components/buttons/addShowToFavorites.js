import React, { useContext } from "react";
import {TvShowsContext} from "../../contexts/tvContext";

const AddShowToFavoriteButton = ({ tv }) => {
  const context = useContext(TvShowsContext);

  const handleAddShowToFavorite = e => {
    e.preventDefault();
    context.addShowToFavorites(tv.id);
    console.log(tv.id)
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddShowToFavorite}
    >
      Add Show to Favorites
    </button>
  );
};

export default AddShowToFavoriteButton;