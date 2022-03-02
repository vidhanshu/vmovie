import React from "react";
import ConNavbar from "./components/ConNavbar";
import styles from "../../styles/connect-to-vmovie/ConGlobal.module.scss";
import ConHero from "./components/ConHero";
import ConAccordion from "./components/ConAccordion";
function WayToWatch() {
  return (
    <>
      <ConNavbar />
      <ConHero />
      <ConAccordion />
    </>
  );
}

export default WayToWatch;
