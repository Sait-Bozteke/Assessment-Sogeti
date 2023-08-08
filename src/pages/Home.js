import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import SearchMovieCard from "../components/SearchMovieCard";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import FeatureMovieCard from "../components/FeatureMovieCard";

const Main = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);
  const [featureMovies, setFeatureMovies] = useState([]);

  useEffect(() => {
    getFeatureMovies();
  }, []);

  const getFeatureMovies = () => {
    Promise.all([
      axios.get(
        "https://www.omdbapi.com/?i=tt1243957&plot=full&apiKey=6c3a2d45"
      ),
      axios.get(
        "https://www.omdbapi.com/?i=tt0268978&plot=full&apiKey=6c3a2d45"
      ),
    ])
      .then((res) => res.map((res) => res.data))
      .then((res) => {
        setFeatureMovies(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSearchMovies = async (searchTerm) => {
    await axios
      .get(`https://www.omdbapi.com/?s=${searchTerm}&apiKey=6c3a2d45`)
      .then((response) => setSearchMovies(response.data.Search))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm && currentUser) {
      getSearchMovies(searchTerm);
    } else if (!currentUser) {
      alert("Please Login to Search");
      navigate("/login");
    } else {
      alert("Please Enter Search Term");
    }
  };

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="search"
          className="search-input"
          placeholder="Search a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="d-flex justify-content-center flex-wrap">
        {searchTerm
          ? searchMovies
              ?.slice(0, 5)
              .map((searchMovie) => (
                <SearchMovieCard {...searchMovie} key={searchMovie.imdbID} />
              ))
          : featureMovies?.map((featureMovie) => (
              <FeatureMovieCard {...featureMovie} key={featureMovie.imdbID} />
            ))}
      </div>
    </>
  );
};

export default Main;
