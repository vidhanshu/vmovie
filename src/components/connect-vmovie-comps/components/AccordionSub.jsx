import React from "react";
import second from "../../../styles/connect-to-vmovie/AccordionSub.module.scss";
import styles from "../../../styles/connect-to-vmovie/AccordionSub.module.scss";
function AccordionSub({ src, alt, heading, idx }) {
  console.log(idx);
  return (
    <li className={styles.acc_component}>
      <img src={src} alt={alt} />
      <h5>{heading}</h5>
      <div className={styles.div}></div>
    </li>
  );
}

export default AccordionSub;
