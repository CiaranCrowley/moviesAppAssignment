// import React, { useContext } from "react";
import React, {useContext, lazy} from "react";
// import PageTemplate from '../components/templateTVListPage'
import {TvShowsContext} from '../contexts/tvContext'
// import AddShowToWatchListButton from '../components/buttons/addShowToWatchlist'

const PageTemplate = lazy(() => import("../components/templateTVListPage"));
const AddShowToWatchListButton = lazy(() => import("../components/buttons/addShowToWatchlist"));

const TopRatedTv = () => {
    const context = useContext(TvShowsContext);
    const topRatedTv = context.topRatedTv.filter((t) => {
        return !("topRatedTv" in t);
    });

    return (
        <PageTemplate
            name="Top rated Shows"
            tvShows={topRatedTv}
            action={(tv) => {
                return <AddShowToWatchListButton tv={tv} />;
            }}
        />
    );
};
export default TopRatedTv;