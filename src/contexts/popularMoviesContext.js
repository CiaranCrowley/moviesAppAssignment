import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getPopularMovies} from "../api/tmdb-api";

export const PopularMoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.movies, popular: [...state.popular] };
    case "load-popularMovies":
      return { popular: action.payload.movies, movies: [...state.movies] };
    default:
      return state;
  }
};

const PopularMoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], popular: [] });

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getPopularMovies().then((movies) => {
      dispatch({type: "load-popularMovies", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PopularMoviesContext.Provider
      value={{
        movies: state.movies,
        popular: state.popular,
      }}
    >
      {props.children}
    </PopularMoviesContext.Provider>
  );
};

export default PopularMoviesContextProvider;