import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getLatestMovies} from "../api/tmdb-api";

export const LatestMoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        latest: [...state.latest],
      };
    case "load":
      return { movies: action.payload.movies, latest: [...state.latest] };
    case "load-latestMovies":
      return { latest: action.payload.movies, movies: [...state.movies] };
    default:
      return state;
  }
};

const LatestMoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], latest: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getLatestMovies().then((movies) => {
      dispatch({type: "load-latestMovies", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LatestMoviesContext.Provider
      value={{
        movies: state.movies,
        latest: state.latest,
        addToFavorites: addToFavorites,
        addReview: addReview,
      }}
    >
      {props.children}
    </LatestMoviesContext.Provider>
  );
};

export default LatestMoviesContextProvider;