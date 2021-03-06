import React from "react";
import "./personDetails.css";

export default ({ person }) => {
  return (
    <>
      <h4>Known For</h4>
      <p>{person.known_for_department}</p>
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Name
        </li>
        <li key="rut" className="list-group-item ">
          {person.name}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Birthday
        </li>
        <li key="rdv" className="list-group-item ">
          {person.birthday}
        </li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="gh" className="list-group-item list-group-item-dark">
          Place of Birth
        </li>
        {person.place_of_birth}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="gh" className="list-group-item list-group-item-dark">
          Biography
        </li>
        {person.biography}
      </ul>
    </>
  );
};