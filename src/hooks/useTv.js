import { useEffect, useState } from "react";
import {getTvShow} from '../api/tmdb-api'

const useTv = id => {
    const [tv, setTvShow] = useState(null);
    useEffect(() => {
      getTvShow(id).then(tv => {
        setTvShow(tv);
      });
    }, [id]);
    return [tv, setTvShow];
  };
  
  export default useTv;