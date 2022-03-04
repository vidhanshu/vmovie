import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/pages/movies/AllMovies.module.scss";
import SingleMovie from "./SingleMovie";
import AllTypeOfMovies from "./AllTypeOfMovies";
import NotFound from "./NotFound";
import ProgressBar from "./ProgressBar";
function AllMovies({ search, category }) {
  const [movies, setMovies] = useState([]);
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
        setMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(category);
  };
  return (
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
                    Title={e.title}
                    Year={e.release_date}
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
  );
}

export default AllMovies;
