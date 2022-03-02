import React from "react";

function ConComp({ img }) {
  return (
    <div className={styles.content}>
      <h1 className={styles.con_heading}>{heading}</h1>
      <img src={img} alt="cover" />
    </div>
  );
}

export default ConComp;
