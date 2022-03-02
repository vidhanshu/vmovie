import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/pages/movies/AllMovies.module.scss";
import SingleMovie from "./SingleMovie";
import AllTypeOfMovies from "./AllTypeOfMovies";
function AllMovies({ search }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieRequest();
  }, [search]);

  const getMovieRequest = async () => {
    const url =
      "http://www.omdbapi.com/?s=" +
      (search == "" ? "latest" : search.trim().toLowerCase()) +
      "&i=tt3896198&apikey=2e958e3d";
    axios
      .get(url)
      .then((res) => {
        setMovies(res.data.Search);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.movies}>
        {search.trim() == "" ? (
          <AllTypeOfMovies />
        ) : (
          <div className={styles.movie_slider}>
            {movies &&
              movies.map((e, idx) => {
                return (
                  <SingleMovie
                    key={idx}
                    Poster={e.Poster}
                    Title={e.Title}
                    Year={e.Year}
                  />
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default AllMovies;
