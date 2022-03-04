import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/pages/movies/AllMovies.module.scss";
import SingleMovie from "./SingleMovie";
import AllTypeOfMovies from "./AllTypeOfMovies";
import NotFound from "./NotFound";
import ProgressBar from "./ProgressBar";
import data from "../../../api/Data.json";

function AllMovies({ search, category }) {
  const [movies, setMovies] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    getMovieRequest();
  }, [search]);

  const getMovieRequest = async () => {
    const url = `
      https://api.themoviedb.org/3/search/${category}?api_key=119c69fb68d9233d49f240cb24d58da6&language=en-US&query=${
      search === "" || search === null || search === undefined ? "dil" : search
    }
      }&page=1&include_adult=false`;
    await axios
      .get(url)
      .then((res) => {
        setErr(false);
        setMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        setErr(true);
        setMovies(data);
      });
    console.log(category);
  };
  return !err ? (
    <div className={styles.container}>
      <div className={styles.movies}>
        {search.trim() === "" ? (
          <AllTypeOfMovies />
        ) : (
          <div className={styles.movie_slider}>
            {movies.length ? (
              movies.map((e, idx) => {
                return (
                  <SingleMovie
                    key={idx}
                    Poster={
                      category === "person" ? e.profile_path : e.poster_path
                    }
                    Title={
                      category == "person"
                        ? e.name
                        : category == "tv"
                        ? e.original_name
                        : e.title
                    }
                    Year={
                      category === "person"
                        ? e.known_for_department
                        : category === "tv"
                        ? e.first_air_date
                        : e.release_date
                    }
                    popularity={e.popularity}
                  />
                );
              })
            ) : (
              <NotFound />
            )}
          </div>
        )}
      </div>
    </div>
  ) : (
    <h1 className={styles.api_limit_exceed}>
      Sorry API request LIMIT exceeded
    </h1>
  );
}

export default AllMovies;
