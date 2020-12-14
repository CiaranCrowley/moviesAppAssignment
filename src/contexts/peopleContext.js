import React, { useEffect, createContext, useReducer } from "react";
import { getPeople } from "../api/tmdb-api";

export const PeopleContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
      case "add-favoriteActor":
        return {
          people: state.people.map((t) => 
           t.id === action.payload.person.id ? { ...t, favoriteActor: true } : t
          ),
          popularPeople: [...state.popularPeople],
        };
      case "load":
        return { people: action.payload.people, popularPeople: [...state.popularPeople] };
      case "load-popularPeople":
        return { popularPeople: action.payload.people, people: [...state.people] };
      default:
        return state;
    };
};

const PeopleContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, { people: [], popularPeople: [] });
  
    const addToFavoriteActors = (personId) => {
      console.log(personId)
      const index = state.people.map((t) => t.id).indexOf(personId);
      dispatch({ type: "add-favoriteActor", payload: {person: state.people[index] } });
    }

    useEffect(() => {
      getPeople().then((people) => {
          dispatch({ type: "load", payload: { people } });
      });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
      <PeopleContext.Provider
        value={{
            people: state.people,
            // popularPeople: state.popularPeople,
            addToFavoriteActors: addToFavoriteActors,
        }}
      >
      {props.children}
      </PeopleContext.Provider>
    );
};

  export default PeopleContextProvider;