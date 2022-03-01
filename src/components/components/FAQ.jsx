import React from "react";
import Collapse from "./Collapse";
import { faq } from "../../api/FAQ";
import styles from "../../styles/FAQ.module.scss";
function FAQ() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Frequently Asked Question</h1>
      </div>
      {faq.map((e, idx) => {
        return <Collapse key={idx} question={e.question} ans={e.ans} />;
      })}
    </div>
  );
}

export default FAQ;
