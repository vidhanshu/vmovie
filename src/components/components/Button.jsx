import React from "react";
import styles from "../../styles/Button.module.scss";
function Button({ onclick, children }) {
  return <button>{children}</button>;
}

export default Button;
