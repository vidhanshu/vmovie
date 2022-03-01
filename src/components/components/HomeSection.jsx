import React from "react";
import styles from "../../styles/HomeSection.module.scss";
function HomeSection({ video, alt, src, heading, description, reverse }) {
  return (
    <div className={`${styles.container} ${reverse ? styles.reverse : null}`}>
      <div className={styles.content}>
        <div className={styles.text_content_container}>
          <h1>{heading}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.image_container}>
        <div className={styles.main_image_container}>
          {video ? (
            <video autoPlay playsInline muted loop>
              <source src={video} type="video/mp4" />
            </video>
          ) : null}
          <img src={src} alt={alt} />
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
