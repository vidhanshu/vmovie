import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.scss";
import Hero from "../components/Hero";
import HomeSections from "../components/HomeSections";
import FAQ from "../components/FAQ";

function Home() {
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
