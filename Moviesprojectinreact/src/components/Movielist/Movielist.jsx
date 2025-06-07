import React from "react";
// import { movies } from "../data/movies";
import { movies } from "../../data/movies";

// import MovieCard from "./MovieCard";
import MovieCard from "../MovieCard/MovieCard";

// import MovieCard from "./MovieCard";

import "./MovieList.css";

const MovieList = () => {
  return (

    
    <div className="movie-list">
   

      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
