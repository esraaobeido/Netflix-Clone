import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalMovie from '../ModalMovie/ModalMovie';
import './Movie.css';


function Movie(props) {
  const { movie} = props;
  const [showModal, setShowModal] = useState(false);

  const handleAddToFavorites = () => {
    setShowModal(true);
  };

  const onMovieAdded = () => {
    console.log('Movie added');
  }

  return (
    <>
      <Card className="movie-card">
        <div className="poster-wrapper">
          <Card.Img className="poster" variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <Button className="add-btn" variant="primary" onClick={handleAddToFavorites}>
            Add to favorites
          </Button>
        </div>
        <Card.Body>
          <Card.Title className="title">{movie.title}</Card.Title>
          <Card.Text className="text">
            <div className="release-date">Release date: {movie.release_date}</div>
            <div className="overview">Overview: {movie.overview}</div>
          </Card.Text>
        </Card.Body>
      </Card>
      <ModalMovie
        show={showModal}
        handleClose={() => setShowModal(false)}
        movie={movie}
        onMovieAdded={onMovieAdded} // pass onMovieAdded as a prop to ModalMovie
      />
    </>
  );
}

export default Movie;
