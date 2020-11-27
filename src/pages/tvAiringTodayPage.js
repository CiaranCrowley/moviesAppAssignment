import React, { useContext } from "react";
import PageTemplate from '../components/templateTVListPage'
import {TvShowsContext} from '../contexts/tvContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const TvAiringToday = () => {
    const context = useContext(TvShowsContext);
    const airing = context.airing.filter((t) => {
        return !("airing" in t);
    });

    return (
        <PageTemplate
            name="Airing Today"
            tvShows={airing}
            action={(tv) => {
                return <AddToWatchListButton tv={tv} />;
            }}
        />
    );
};
export default TvAiringToday;