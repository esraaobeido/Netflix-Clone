import React from 'react';
import Movie from '../Movie/Movie';
import './MovieList.css';

function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movieData.map((movie, idx) => (
        <Movie key={idx} movie={movie} posterUrl={movie.posterUrl} title={movie.title} />
      ))}
    </div>
  );
}
export default MovieList;
  
