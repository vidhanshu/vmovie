import React from "react";
import ConNavbar from "./components/ConNavbar";
import styles from "../../styles/connect-to-vmovie/ConGlobal.module.scss";
import ConHero from "./components/ConHero";
import Footer from "../components/Footer";
import ConAccordion from "./components/ConAccordion";
function WayToWatch() {
  return (
    <>
      <ConNavbar />
      <ConHero />
      <ConAccordion />
      <Footer />
    </>
  );
}

export default WayToWatch;
