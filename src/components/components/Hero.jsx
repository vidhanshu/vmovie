import React from "react";
import styles from "../../styles/Hero.module.scss";
import Button from "./Button";
import Input from "./Input";
import { Link } from "react-router-dom";
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
        <Input
          required="true"
          type="email"
          placeholder="Enter your email address"
        ></Input>
        <Link to="/movies">
          <Button normal={true}>Get started &#8811;</Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
