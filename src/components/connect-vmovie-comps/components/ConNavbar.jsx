import React from "react";
import styles from "../../../styles/connect-to-vmovie/ConNavbar.module.scss";
import logo from "../../../assets/LOGO-NAME.svg";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
function ConNavbar() {
  return (
    <nav>
      <div className={styles.container}>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles.right}>
          <div className={styles.signIn}>sign in</div>
          <Button normal={true}>sign up</Button>
        </div>
      </div>
    </nav>
  );
}

export default ConNavbar;
