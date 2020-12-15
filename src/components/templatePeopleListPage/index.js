import React, { useState } from "react";
import Header from "../personHeaderList";
import PeopleList from "../peopleList";
import PeopleFilterControls from "../peopleFilterControls";

const PeopleListPageTemplate = ({people, name, action }) => {
  const [nameFilter, setNameFilter] = useState("");
  let displayedPeople = people
    .filter(m => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  };

  return (
    <>
      <Header name={name} numPeople={displayedPeople.length} />
      <PeopleFilterControls onUserInput={handleChange} numPeople={displayedPeople.length}/>
      <PeopleList
        action={action}
        people={displayedPeople}
      ></PeopleList>
    </>
  );
};

export default PeopleListPageTemplate ;