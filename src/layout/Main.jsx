import React, { useEffect, useState } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&page=2&s=star wars`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const searchMovies = (str, searchType = "all") => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&page=2&s=${str}${
        searchType !== "all" ? `&type=${searchType}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <main className="container content">
      <Search searchResult={searchMovies} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
};

export { Main };
