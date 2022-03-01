import React from "react";
import styles from "../../styles/HomeSection.module.scss";
function HomeSection({ video, alt, src, heading, description }) {
  return (
    <div className={styles.container}>
      <div className="styles">
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.image_container}>
        <img src={src} alt={alt} />
        {video ? (
          <video autoPlay playsInline muted loop>
            <source src={video} type="video/mp4" />
          </video>
        ) : null}
      </div>
    </div>
  );
}

export default HomeSection;
