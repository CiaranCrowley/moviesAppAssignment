import { useEffect, useState } from "react";
import {getPersonDetails} from '../api/tmdb-api'

const usePerson = id => {
  const [person, setPerson] = useState(null);
  useEffect(() => {
    getPersonDetails(id).then(person => {
        setPerson(person);
    });
  }, [id]);
  return [person, setPerson];
};

export default usePerson;