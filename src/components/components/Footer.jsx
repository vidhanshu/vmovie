import React from "react";
import styles from "../../styles/Footer.module.scss";
import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "../../assets/LOGO-NAME.svg";
function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.sub_container}></div>
      <div className={styles.help}>Questions? Call 000-800-040-1843</div>
      <div className={styles.links}>
        <ul>
          <li>
            <Link to="/contact">FAQ</Link>
          </li>
          <li>
            <Link to="/">Media Centre</Link>
          </li>
          <li>
            <Link to="/">Ways to Watch</Link>
          </li>
          <li>
            <Link to="/">Cookie Preferences</Link>
          </li>
          <li>
            <Link to="/">Speed Test</Link>
          </li>
          <li>
            <Link to="/">Help Centre</Link>
          </li>
          <li>
            <Link to="/">Investor Relations</Link>
          </li>
          <li>
            <Link to="/">Terms of Use</Link>
          </li>
          <li>
            <Link to="/">Corporate Information</Link>
          </li>
          <li>
            <Link to="/">Legal Notices</Link>
          </li>
          <li>
            <Link to="/">Account</Link>
          </li>
          <li>
            <Link to="/">Jobs</Link>
          </li>
          <li>
            <Link to="/">Privacy</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Only on Netflix</Link>
          </li>
        </ul>
      </div>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.copyright}>
        vmovie © All rights reserved {new Date().getFullYear() - 1}-
        {new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default Footer;
