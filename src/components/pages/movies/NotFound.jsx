import React from "react";
import styles from "../../../styles/pages/movies/NotFound.module.scss";
function NotFound() {
  return (
    <div className={styles.not_found_container}>
      <div>
        <i className="fas fa-question"></i>
        <i className="fas fa-question"></i>
        <h1>Not found!</h1>
        <p>Please do check your spelling</p>
      </div>
    </div>
  );
}

export default NotFound;
