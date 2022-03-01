import { useState, useEffect, useRef } from "react";
import styles from "../styles/navbar.module.scss";
import logo from "../assets/LOGO-NAME.svg";
import { Link } from "react-router-dom";
function Navbar({ changeMode }) {
  const [isLight, setIsLight] = useState(true);
  const [menu, setMenu] = useState(true);
  const [size, setSize] = useState(true);
  const navbar = useRef();
  const changeMenu = () => {
    setMenu((prev) => !prev);
  };
  const toggleLightDarkMode = () => {
    changeMode();
    setIsLight((prev) => !prev);
  };

  const responsiveNavbar = () => {
    if (window.innerWidth < 700) {
      setSize(true);
      setMenu(true);
    } else {
      setSize(false);
      setMenu(false);
    }
  };
  useEffect(() => {
    responsiveNavbar();
    window.addEventListener("resize", responsiveNavbar);
  }, []);
  return (
    <nav className={styles.nav}>
      <div className={styles.navbar_container}>
        <div
          onClick={
            size
              ? () => {
                  setMenu(true);
                }
              : null
          }
          className={styles.logo}
        >
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className={styles.right_container}>
          <div
            ref={navbar}
            className={
              !menu
                ? `${styles.right_menu} ${styles.close}`
                : `${styles.right_menu} ${styles.open}`
            }
          >
            <ul className={styles.right_menu_ul}>
              <Link to="/">
                <li onClick={size ? changeMenu : null}>Home </li>
              </Link>

              <Link to="/credits">
                <li onClick={size ? changeMenu : null}>Credits </li>
              </Link>

              <Link to="/contact">
                <li onClick={size ? changeMenu : null}>Contact </li>
              </Link>

              <Link to="/services">
                <li onClick={size ? changeMenu : null}>Services </li>
              </Link>

              <Link to="/sign">
                <li className={styles.btn} onClick={size ? changeMenu : null}>
                  Sign in
                </li>
              </Link>
            </ul>
          </div>
          <div className={styles.right_options}>
            {isLight ? (
              <i
                onClick={toggleLightDarkMode}
                style={{ color: "rgb(255, 217, 0)" }}
                className="fas fa-sun"
              ></i>
            ) : (
              <i
                onClick={toggleLightDarkMode}
                style={{ color: "rgb(32, 129, 255)" }}
                className="fas fa-moon"
              ></i>
            )}
            <div className={styles.menu_icon}>
              {menu ? (
                <i onClick={changeMenu} className="fas fa-bars"></i>
              ) : (
                <i onClick={changeMenu} className="fas fa-times"></i>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
