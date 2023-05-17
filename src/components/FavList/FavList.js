import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FavoriteModal from '../FavoriteModal/FavoriteModal';


function FavList() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [comments, setComments] = useState('');

  useEffect(() => {
    fetchFavoriteMovies();
  }, []);

  const fetchFavoriteMovies = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL || "http://localhost:3004"}/getMovies`);
    setFavoriteMovies(response.data);
  };

  const handleDeleteMovie = async (id) => {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL || "http://localhost:3004"}/delete/${id}`);
    fetchFavoriteMovies();
  };

  const handleOpenUpdateModal = (movie) => {
    setSelectedMovie(movie);
    setComments(movie.comments);
    setShowUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setSelectedMovie(null);
    setComments('');
    setShowUpdateModal(false);
    fetchFavoriteMovies();
  };

  const handleUpdateComments = async () => {
    await axios.put(
      `${process.env.REACT_APP_SERVER_URL || "http://localhost:3004"}/update/${selectedMovie.id}`,
      { comments }
    );
    handleCloseUpdateModal();
  };

  const UpdateModal = () => {
    return (
      <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" value={comments} onChange={(e) => setComments(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdateModal}>Cancel</Button>
          <Button variant="primary" onClick={handleUpdateComments}>Update</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <>
      <h1>Favorite List</h1>
      <div className="movie-list">
        {favoriteMovies.map((movie) => (
          <Card key={movie.id} className="movie-card">
            <div className="poster-wrapper">
              <Card.Img className="poster" variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            </div>
            <Card.Body>
              <Card.Title className="title">{movie.title}</Card.Title>
              <Card.Text className="text">
                <div className="comments">Comment: {movie.comments}</div>
              </Card.Text>
              <Button variant="danger" onClick={() => handleDeleteMovie(movie.id)}>Delete</Button>
              <Button variant="primary" onClick={() => handleOpenUpdateModal(movie)}>Update</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      {showUpdateModal && <UpdateModal />}
      </>
  );
}

export default FavList;
