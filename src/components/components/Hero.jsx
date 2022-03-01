import React from "react";
import styles from "../../styles/Hero.module.scss";
import Button from "./Button";
import Input from "./Input";
function Hero() {
  return (
    <div className={styles.hero_container}>
      <h1 className={styles.heading}>Unlimited movies, TV shows and more.</h1>
      <div className={styles.sub_heading}>Watch anywhere. Cancel anytime.</div>
      <div className={styles.description}>
        Ready to watch? <br />
        Enter your email to create or restart your membership.
      </div>
      <div className={styles.input_group}>
        <Input placeholder="Enter your email address"></Input>
        <Button normal={true}>Get started &#8811;</Button>
      </div>
    </div>
  );
}

export default Hero;
