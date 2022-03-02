import React, { useState } from "react";
import Input from "../../components/Input";
import styles from "../../../styles/pages/movies/Search.module.scss";
function Search({ changeSearch }) {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input
          onChange={(evt) => {
            changeSearch(evt.currentTarget.value);
          }}
          type="text"
          placeholder="Movie, artist, series....."
        />
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
}

export default Search;
