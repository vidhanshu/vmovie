import React, { useEffect, useRef } from "react";
import styles from "./progress.module.scss";
function ProgressBar({ percentage }) {
  const bar = useRef();
  useEffect(() => {
    bar.current.innerText = percentage;
  });
  return (
    <div className={styles.circular}>
      <div className={styles.inner}></div>
      <div ref={bar} className={styles.number}>
        100%
      </div>
      <div className={styles.circle}>
        <div className={`${styles.bar} ${styles.left}`}>
          <div className={styles.progress}></div>
        </div>
        <div className={`${styles.bar} ${styles.right}`}>
          <div className={styles.progress}></div>
        </div>
      </div>
    </div>
  );
}
export default ProgressBar;
