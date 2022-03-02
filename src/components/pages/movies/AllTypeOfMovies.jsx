import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/pages/movies/AllTypeMovies.module.scss";
import SingleMovie from "./SingleMovie";
function AllTypeOfMovies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {}, []);
  return (
    <div className={styles.container}>
      Yet to create But you can search movies but plz enter full name of the
      movie we don't have any AI to reccomend you the movie just on the basis of
      alphabets
    </div>
  );
}

export default AllTypeOfMovies;
