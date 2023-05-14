import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home.js';
import MovieList from './components/MovieList/MovieList.js';
import ModalMovie from './components/ModalMovie/ModalMovie.js';
import Movie from './components/Movie/Movie.js';
import FavList from './components/FavList/FavList.js';
import Navbar from './components/Navbar/Navbar.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/favlist" element={<FavList />} /> */}
        <Route path="/movielist" element={<MovieList />} />
        <Route path="/modalmovie" element={<ModalMovie />} />      
      </Routes>
    </>
  );
}

export default App;
