import React from "react";
import styles from "../../styles/Input.module.scss";
function Input({ type, placeholder }) {
  return <input type={type} required={true} placeholder={placeholder} />;
}

export default Input;
