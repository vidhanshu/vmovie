import React from "react";
import styles from "../../../styles/pages/movies/Movies.module.scss";
import Search from "./Search";
import AllMovies from "./AllMovies";

const reducer = (state, action) => {
  return action.search;
};

const reducerForCategory = (state, action) => {
  return action.cat;
};
function Movies() {
  const [keyword, setKeyword] = React.useReducer(reducer, "oggy");
  const [category, setCategory] = React.useReducer(reducerForCategory, "tv");

  const changeSearchFromInputComp = (value) => {
    setKeyword({ search: value });
    console.log(keyword);
  };
  const changeCategoryFromInputComp = (value) => {
    setCategory({ cat: value });
    console.log(category);
  };

  return (
    <div className={styles.container}>
      <Search
        changeSearch={changeSearchFromInputComp}
        changeCategory={changeCategoryFromInputComp}
      />
      <AllMovies search={keyword} category={category} />
    </div>
  );
}

export default Movies;
