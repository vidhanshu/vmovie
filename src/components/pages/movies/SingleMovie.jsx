import React from "react";
import styles from "../../../styles/pages/movies/SingleMovie.module.scss";
import NA from "../../../assets/OIP.jpg";
function SingleMovie({ Title, Poster, Type, Year }) {
  return (
    <div className={styles.card}>
      <img src={Poster.length > 3 ? Poster : NA} alt={Title} />
      <div className={styles.content}>
        <h3>{Title}</h3>
        <h5>{Year}</h5>
      </div>
    </div>
  );
}

export default SingleMovie;
