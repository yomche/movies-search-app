import React from "react";

function Movie(props) {
  const {
      Title: title,
      Year: year,
      imdbID: id,
      Type: type,
      Poster: poster,
  } = props;


  return (
      <div id={id} className="card">
          <div className="card-image">
              {poster === 'N/A' ? (
                  <img
                      src={`https://via.placeholder.com/300x400?text=${title}`}
                      alt="no original"
                  />
              ) : (
                  <img  src={poster} alt="original"/>
              )}
          </div>
          <div className="card-content">
              <span className="card-title grey-text text-darken-4">
                  {title}
              </span>
              <p>
                  {year} <span className="right">{type}</span>
              </p>
          </div>
      </div>
  );
}

export {Movie};