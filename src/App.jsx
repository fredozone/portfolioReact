import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "./menu.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Page404 from "./components/page404";
const App = () => {
  return (
    <div>
      <Router basename="/portfolioReact">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Navigate to="/home" />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
