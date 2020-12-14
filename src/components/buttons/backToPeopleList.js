import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

const BackToPeopleList = ({ person }) => {
  return (
    <Button variant="primary">
    <Link className="nav-link text-white " to="/people">
      Return to Popular Actors
    </Link>
    </Button>
  );
};

export default BackToPeopleList;