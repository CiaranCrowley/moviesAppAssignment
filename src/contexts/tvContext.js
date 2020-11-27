import React, { useEffect, createContext, useReducer } from "react";
import { getTvShows, getTvAiringToday } from "../api/tmdb-api";

export const TvShowsContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
      case "load":
        return { tvShows: action.payload.tvShows, airing: [...state.airing] };
      case "load-airingToday":
        return { airing: action.payload.tvShows, tvShows: [...state.tvShows]}
      default:
        return state;
    }
};

const TvShowsContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, { tvShows: [], airing: [] });
   
    useEffect(() => {
        getTvShows().then((tvShows) => {
        dispatch({ type: "load", payload: { tvShows } });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
      getTvAiringToday().then((tvShows) => {
      dispatch({ type: "load-AiringToday", payload: { tvShows } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
    return (
      <TvShowsContext.Provider
        value={{
            tvShows: state.tvShows,
            airing: state.airing,
        }}
      >
        {props.children}
      </TvShowsContext.Provider>
    );
  };
  
  export default TvShowsContextProvider;