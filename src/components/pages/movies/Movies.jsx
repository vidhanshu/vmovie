import React from "react";
import styles from "../../../styles/pages/movies/Movies.module.scss";
import Search from "./Search";
import AllMovies from "./AllMovies";

const reducer = (state, action) => {
  return action.search;
};
function Movies() {
  const [keyword, setKeyword] = React.useReducer(reducer, "");

  const changeSearchFromInputComp = (value) => {
    setKeyword({ search: value });
    console.log(keyword);
  };

  return (
    <div className={styles.container}>
      <Search changeSearch={changeSearchFromInputComp} />
      <AllMovies search={keyword} />
    </div>
  );
}

export default Movies;
