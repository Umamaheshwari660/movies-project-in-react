import React, { useState } from 'react';
import movies from './movies';
import './TrendingMovies.css';

const TrendingMovies = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="trending-container">
      <h2 className="heading">Trending movies</h2>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card" onClick={() => setSelectedMovie(movie)}>
            <img src={movie.posterImage} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="trailer-modal" onClick={() => setSelectedMovie(null)}>
          <div className="trailer-box" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="400"
              src={selectedMovie.trailerUrl}
              title={selectedMovie.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button onClick={() => setSelectedMovie(null)} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrendingMovies;
