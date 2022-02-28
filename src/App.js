import styles from "./styles/Global.module.scss";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Credits from "./components/pages/Credits";
import Services from "./components/pages/Services";

function App() {
  const [dark, setDark] = useState(true);
  const modeToggle = () => {
    setDark((prev) => !prev);
  };
  return (
    <div className={dark ? styles.dark_container : styles.light_container}>
      <Navbar changeMode={modeToggle} />{" "}
      <Routes>
        <Route path="/" exact element={<Home />} />{" "}
        <Route path="/services" element={<Services />} />{" "}
        <Route path="/contact" element={<Contact />} />{" "}
        <Route path="/credits" element={<Credits />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default App;
