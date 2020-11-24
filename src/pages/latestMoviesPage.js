import React, {useContext} from "react";
import PageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {LatestMoviesContext} from '../contexts/latestMoviesContext'

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