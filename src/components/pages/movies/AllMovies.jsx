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
    const url = `
      https://api.themoviedb.org/3/search/movie?api_key=119c69fb68d9233d49f240cb24d58da6&language=en-US&query=${
        search.trim() != "" ? search : "dilwale"
      }&page=1&include_adult=false`;
    axios
      .get(url)
      .then((res) => {
        setMovies(res.data.results);
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
                    Poster={e.poster_path}
                    Title={e.title}
                    Year={e.release_date}
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
