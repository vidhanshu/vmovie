import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.scss";
import Hero from "../components/Hero";
import HomeSection from "../components/HomeSection";
import device from "../../assets/tv.png";
import sacred from "../../assets/video-devices-in.m4v";
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
        <HomeSection
          alt="aisehi"
          src={device}
          video={sacred}
          heading="Watch everywhere."
          description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        />
      </section>
    </div>
  );
}

export default Home;
