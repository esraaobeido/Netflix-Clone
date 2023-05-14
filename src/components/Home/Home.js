import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import Navbar from "../Navbar/Navbar";
import './Home.css';


function Home() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const serverUrl = `${process.env.REACT_APP_SERVER_URL || "http://localhost:3004"}/trending`;
      try {
        const result = await axios.get(serverUrl);
        setMovieData(result.data);
      } catch (error) {
        console.log(error);
      }
      console.log(serverUrl);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <MovieList movieData={movieData} />
    </>
  );
}

export default Home;

