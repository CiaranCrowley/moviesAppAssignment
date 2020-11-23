import React, {useContext} from "react";
import PageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const PopularMoviesPage = () => {
    const context = useContext(MoviesContext);
    const popularMovies = context.popular.filter((m) => {
        return !("popular" in m);
    });

    return(
        <PageTemplate
            title="Popular Movies"
            movies={popularMovies}
            action={movie => <AddReviewButton movie={movie} />}
        />
    );
};

export default PopularMoviesPage;