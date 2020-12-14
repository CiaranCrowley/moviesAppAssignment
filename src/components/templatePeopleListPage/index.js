import React, { useState } from "react";
import Header from "../personHeaderList";
import PeopleList from "../peopleList";
import FilterControls from "../filterControls";

const PeopleListPageTemplate = ({people, name, action }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genre = Number(genreFilter)
  let displayedPeople = people
    .filter(m => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(m => {
      return  genre > 0
        ? m.genre_ids.includes(Number(genreFilter))
        : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <Header name={name} numPeople={displayedPeople.length} />
      <FilterControls onUserInput={handleChange} numPeople={displayedPeople.length}/>
      <PeopleList
        action={action}
        people={displayedPeople}
      ></PeopleList>
    </>
  );
};

export default PeopleListPageTemplate ;