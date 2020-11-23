import React, {useContext} from "react";
import PageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {PopularMoviesContext} from '../contexts/popularMoviesContext'

const PopularMoviesPage = () => {
    const context = useContext(PopularMoviesContext);
    const popularMovies = context.popular.filter((m) => {
        return !("popular" in m);
    });

    return(
        <PageTemplate
            title="Popular Movies"
            movies={popularMovies}
            action={movie => {
                return <AddReviewButton movie={movie} />;
              }}
        />
    );
};

export default PopularMoviesPage;