import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = (searchMovie) => {
  console.log("searchMovies", searchMovie.Poster);
  const { currentUser } = useContext(AuthContext);
  let navigate = useNavigate();
  return (
    <div
      className="movie"
      onClick={() =>
        currentUser ? navigate("details/" + searchMovie.imbdId) : alert("login")
      }
    >
      <img
        src={searchMovie.Poster ? searchMovie.Poster : defaultImage}
        alt=""
      />
      <div className="d-flex align-items-baseline justify-content-between p-1 text-white">
        <h5>{searchMovie.Title}</h5>
        {currentUser && <span>{searchMovie.Year}</span>}
      </div>

      <div className="movie-over">
        <h2>Overview</h2>
        <p>{searchMovie.Type}</p>
      </div>
    </div>
  );
};

export default MovieCard;
