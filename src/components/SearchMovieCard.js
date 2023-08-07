import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({ Title, Poster, Year, Type, imbdId, Plot }) => {
  console.log("searchMovies", { Title });
  const { currentUser } = useContext(AuthContext);
  let navigate = useNavigate();
  return (
    <>
      {
        <div
          className="movie"
          onClick={() =>
            currentUser ? navigate("details/" + imbdId) : alert("login")
          }
        >
          <img src={Poster ? Poster : defaultImage} alt="" />
          <div className="d-flex align-items-baseline justify-content-between p-1 text-white">
            <h5>{Title}</h5>
            {currentUser && <span>{Year}</span>}
          </div>

          <div className="movie-over">
            <h2>Overview</h2>
            <p>{Plot}</p>
          </div>
        </div>
      }
    </>
  );
};

export default MovieCard;
