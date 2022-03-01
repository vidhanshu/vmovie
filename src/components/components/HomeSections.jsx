import React from "react";
import { section } from "../../api/homesections";
import HomeSection from "../components/HomeSection";
import styles from "../../styles/Home.module.scss";
function HomeSections() {
  return (
    <>
      {section.map(
        ({ video, alt, src, heading, description, reverse }, idx) => {
          return (
            <React.Fragment key={idx}>
              <HomeSection
                alt={alt}
                src={src}
                video={video}
                heading={heading}
                description={description}
                reverse={reverse}
              />
              <hr className={styles.hr} />
            </React.Fragment>
          );
        }
      )}
    </>
  );
}

export default HomeSections;
