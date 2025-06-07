import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className="movie-card" onClick={() => navigate(`/movie/${movie.id}`)}>
      <img src={movie.image} alt={movie.title} />
      <div className="overlay">
        <i className="fab fa-youtube"></i>
      </div>
    </div>
  );
};

export default MovieCard;
