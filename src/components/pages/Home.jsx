import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.scss";
import Hero from "../components/Hero";
import HomeSection from "../components/HomeSection";
import { section } from "../../api/homesections";
function Home() {
  const [movies, setMovies] = useState([]);

  // const getMovieRequest = async () => {
  //   const url = "http://www.omdbapi.com/?s=baaghi&i=tt3896198&apikey=2e958e3d";
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       console.log(res.data.Search);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  console.log(section);
  return (
    <div className={styles.container}>
      <section className={styles.hero_container}>
        <Hero />
      </section>
      <section className={styles.sections}>
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
      </section>
    </div>
  );
}

export default Home;
