import React, { useContext } from "react";
import {TvShowsContext} from "../../contexts/tvContext";

const AddShowToWatchListButton = ({ tv }) => {
  const context = useContext(TvShowsContext);

  const handleAddShowToWatchList = e => {
    e.preventDefault();
    context.addShowToWatchlist(tv.id)
    console.log(tv.id)
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddShowToWatchList}
    >
      Add Show to Watch List
    </button>
  );
};

export default AddShowToWatchListButton;