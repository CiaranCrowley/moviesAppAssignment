import React, { useEffect, createContext, useReducer } from "react";
import { getTvShows, getTopRatedTv } from "../api/tmdb-api";

export const TvShowsContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
      case "add-showToFavorite":
        return {
          tvShows: state.tvShows.map((t) =>
           t.id === action.payload.show.id ? { ...t, favoriteShow: true } : t
          ),
          topRatedTv: {...state.topRatedTv},
        };
      case "add-showWatchlist":
        return {
          topRatedTv: state.topRatedTv.map((t) =>
          t.id === action.payload.show.id ? { ...t, topRatedTv: true} : t
          ),
          tvShows: [...state.tvShows],
        }
      case "load":
        return { tvShows: action.payload.tvShows, topRatedTv: [...state.topRatedTv] };
      case "load-topRatedTv":
        return { topRatedTv: action.payload.tvShows, tvShows: [...state.tvShows] };
      case "add-tvReview":
        return {
          tvShows: state.tvShows.map((t) => 
          t.id === action.payload.show.id
          ? { ...t, review: action.payload.review }
            : t
          ),
          topRatedTv: [...state.topRatedTv],
        };
      default:
        return state;
    }
};

const TvShowsContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, { tvShows: [], topRatedTv: [] });

    const addShowToFavorites = (showId) => {
      const index = state.tvShows.map((t) => t.id).indexOf(showId);
      dispatch({ type: "add-showToFavorite", payload: { show: state.tvShows[index] } })
    }

    const addShowToWatchlist = (showId) => {
      console.log(showId)
      const index = state.topRatedTv.map((t) => t.id).indexOf(showId);
      dispatch({type: "add-showWatchlist", payload: { show: state.topRatedTv[index] } });
    }

    const addTvShowReview = (show, review) => {
      dispatch({ type: "add-tvReview", payload: {show, review } });
    };
   
    useEffect(() => {
        getTvShows().then((tvShows) => {
        dispatch({ type: "load", payload: { tvShows } });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
      getTopRatedTv().then((tvShows) => {
      dispatch({ type: "load-topRatedTv", payload: { tvShows } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
    return (
      <TvShowsContext.Provider
        value={{
            tvShows: state.tvShows,
            topRatedTv: state.topRatedTv,
            addShowToFavorites: addShowToFavorites,
            addShowToWatchlist: addShowToWatchlist,
            addTvShowReview: addTvShowReview,
        }}
      >
        {props.children}
      </TvShowsContext.Provider>
    );
  };
  
  export default TvShowsContextProvider;