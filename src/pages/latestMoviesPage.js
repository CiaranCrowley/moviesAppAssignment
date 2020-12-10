// import React, {useContext} from "react";
import React, {useContext, lazy} from "react";
// import PageTemplate from "../components/templateMovieListPage";
// import AddReviewButton from '../components/buttons/addReview'
import {LatestMoviesContext} from '../contexts/latestMoviesContext'

const PageTemplate = lazy(() => import("../components/templateMovieListPage"));
const AddReviewButton = lazy(() => import("../components/buttons/addReview"));

const LatestMoviesPage = () => {
    const context = useContext(LatestMoviesContext);
    const platestMovies = context.latest.filter((m) => {
        return !("latest" in m);
    });

    return(
        <PageTemplate
            title="Latest Movies"
            movies={platestMovies}
            action={movie => {
                return <AddReviewButton movie={movie} />;
              }}
        />
    );
};

export default LatestMoviesPage;