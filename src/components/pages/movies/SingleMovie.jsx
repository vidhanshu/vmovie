import React from "react";
import styles from "../../../styles/pages/movies/SingleMovie.module.scss";
import NA from "../../../assets/OIP.jpg";
import ProgressBar from "./ProgressBar";
function SingleMovie({ Title, Poster, Type, Year, popularity }) {
  return (
    <div className={styles.card}>
      <div className={styles.img_container}>
        <img
          src={
            Poster === null || Poster === undefined
              ? NA
              : `https://image.tmdb.org/t/p/w185/${Poster}`
          }
          alt={Title}
        />
      </div>
      <div className={styles.content}>
        <h3>{Title}</h3>
        <h5>{Year}</h5>
        <ProgressBar percentage={popularity} />
      </div>
    </div>
  );
}

export default SingleMovie;
