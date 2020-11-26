import React, { useEffect, createContext, useReducer } from "react";
import { getTvShows } from "../api/tmdb-api";

export const TvShowsContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
      case "load":
        return { tvShows: action.payload.tvShows };
      default:
        return state;
    }
};

const TvShowsContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, { tvShows: [] });
   
    useEffect(() => {
        getTvShows().then((tvShows) => {
        dispatch({ type: "load", payload: { tvShows } });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <TvShowsContext.Provider
        value={{
            tvShows: state.tvShows,
        }}
      >
        {props.children}
      </TvShowsContext.Provider>
    );
  };
  
  export default TvShowsContextProvider;

