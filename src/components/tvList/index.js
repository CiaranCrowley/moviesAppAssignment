import React from "react";
import Tv from "../tvCard/";
import "./tvList.css";

const TvList = ({tv, action}) => {
  const tvCards = tv.map(t => (
    <Tv key={t.id} tv={t} action={action} />
  ));
  return <div className="row movies bg-info">{tvCards}</div>;
};

export default TvList;