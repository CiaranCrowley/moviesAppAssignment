import React from "react";
import TvHeader from '../tvHeader'
import "./tvPage.css";

const TemplateTvPage = ({ tv, children }) => {
  return (
    <>
      <TvHeader tv={tv} />
      <div className="row">
        <div className="col-3">
          <img
            src={
                tv.poster_path
                ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}`
                : "./tv-poster-placeholder.png"
            }
            className="tv"
            alt={tv.name}
          />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplateTvPage;