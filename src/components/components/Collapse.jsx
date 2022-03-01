import { useState } from "react";
import styles from "../../styles/Collapse.module.scss";
function Collapse({ question, ans }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => {
        setOpen((prev) => !prev);
      }}
      className={styles.collapse_container}
    >
      <div className={styles.collapse_question}>
        {question}{" "}
        <i
          className={`fas fa-times ${styles.icon}`}
          style={
            !open
              ? { transform: "rotate(43deg)" }
              : { transform: "rotate(0deg)" }
          }
        ></i>
      </div>
      <div
        className={`${styles.collapse_ans} ${
          open ? styles.open : styles.close
        }`}
      >
        {ans}
      </div>
    </div>
  );
}

export default Collapse;
