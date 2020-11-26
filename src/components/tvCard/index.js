import React from "react";
import { Link } from "react-router-dom";
import "./tvCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TvCard = ({show, action}) => {

  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/tv/${show.id}`}>
        <img
          className="card-img-tag center "
          alt={show.name}
          src={
            show.poster_path
              ? `https://image.tmdb.org/t/p/w500/${show.poster_path}`
              : "./show-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-name ">{show.name}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {show.first_air_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {show.vote_count}</span>
          </p>
        </div>
        <div className="card-footer">
           {action(show)}
        </div>
      </div>
    </div>
  );
};

export default TvCard;