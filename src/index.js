import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import WayToWatch from "./components/connect-vmovie-comps/WayToWatch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<App />}></Route>
        <Route path="/way-to-watch" exact element={<WayToWatch />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
