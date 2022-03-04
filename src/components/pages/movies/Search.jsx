import React, { useState } from "react";
import Input from "../../components/Input";
import styles from "../../../styles/pages/movies/Search.module.scss";
function Search({ changeSearch, changeCategory }) {
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
        <div className={styles.select}>
          <select
            id="category"
            onChange={(evt) => {
              let query = evt.target.value.trim().toLocaleLowerCase();
              changeCategory(query);
              changeSearch(
                query === "person" ? "john" : query === "tv" ? "oggy" : "dil"
              );
            }}
          >
            <option value="tv">TV series</option>
            <option value="person">Actor/Actress</option>
            <option value="movies">Movies</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Search;
