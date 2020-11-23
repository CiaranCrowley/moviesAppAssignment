import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getPopularMovies} from "../api/tmdb-api";

export const PopularMoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
      };
      // case "add-popular":
      //   return {
      //     popular: state.popular.map((m) => 
      //       m.id === action.payload.movie.id ? { ...m, popular: true }: m
      //     ),
      //   };
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
        addToFavorites: addToFavorites,
        addReview: addReview,
      }}
    >
      {props.children}
    </PopularMoviesContext.Provider>
  );
};

export default PopularMoviesContextProvider;