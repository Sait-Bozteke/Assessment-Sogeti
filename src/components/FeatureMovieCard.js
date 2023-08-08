import React from "react";

const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({ Title, Poster, Year, Type, imbdId, Plot, Awards }) => {
  return (
    <>
      {
        <div className="movie">
          <img src={Poster ? Poster : defaultImage} alt="" />
          <div className="d-flex align-items-baseline justify-content-between p-1 text-white">
            <h5>{Title}</h5>
            <span>{Year}</span>
          </div>
          <div>{Awards}</div>

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
