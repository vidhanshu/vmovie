import React from "react";
import styles from "../../styles/Button.module.scss";

function Button({ onclick, children, normal }) {
  return (
    <button className={normal ? styles.normal : styles.outlined}>
      {children}
    </button>
  );
}

export default Button;
