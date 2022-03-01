import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.scss";
import Hero from "../components/Hero";
import HomeSections from "../components/HomeSections";
import FAQ from "../components/FAQ";

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
  return (
    <div className={styles.container}>
      <section className={styles.hero_container}>
        <Hero />
      </section>
      <section className={styles.sections}>
        <HomeSections />
      </section>
      <section className={styles.faq}>
        <FAQ />
      </section>
    </div>
  );
}

export default Home;
