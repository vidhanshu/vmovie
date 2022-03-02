import React from "react";
import styles from "../../../styles/connect-to-vmovie/ConComp.module.scss";
function ConComp({ src, heading }) {
  return (
    <div className={styles.content}>
      <h1 className={styles.con_heading}>{heading}</h1>
      <img src={src} alt="cover" />
    </div>
  );
}

export default ConComp;
