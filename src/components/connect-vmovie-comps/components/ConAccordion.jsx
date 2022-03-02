import React, { useState } from "react";
import styles from "../../../styles/connect-to-vmovie/ConAccordion.module.scss";
import { way } from "../../../api/WayToWatch";
import AccordionSub from "./AccordionSub";
import img from "../../../assets/cover-img.jpg";
function ConAccordion() {
  const [current, setCurrent] = useState(0);
  const elems = React.useRef();
  React.useEffect(() => {
    addListEners();
  }, []);

  const addListEners = () => {
    const elements = [...elems.current.children];
    elements.map((e) => {
      e.addEventListener("click", () => {
        elements.map((k) => {
          k.children[2].style.background = "white";
          e.children[2].style.background = "red";
        });
      });
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.options_container}>
        <ul ref={elems} className={styles.options}>
          {way.map((e, idx) => {
            return (
              <React.Fragment key={idx}>
                <AccordionSub
                  idx={idx}
                  src={e.img}
                  heading={e.heading}
                  alt={e.alt}
                />
              </React.Fragment>
            );
          })}
        </ul>
      </div>
      <div className={styles.con_container}>
        <div className={styles.content}>
          <h1 className={styles.con_heading}>hii</h1>
          <img src={img} alt="cover" />
        </div>
      </div>
    </div>
  );
}

export default ConAccordion;
