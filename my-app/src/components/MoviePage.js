
import React from "react";

import Search from "./Search";
import MovieForm from "./MovieForm";
import MovieCollection from "./MovieCollection";

function MoviePage() {
    return (
        <div class='movie-page'>
            <Search />
            <MovieForm />
            <MovieCollection/>
        </div>
    )

}

export default MoviePage;
