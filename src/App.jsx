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
      <Router>
        <Navbar />
        <Routes>
          <Route path="/portfolioReact/home" element={<Home />} />
          <Route path="/portfolioReact/about" element={<About />} />
          <Route path="/portfolioReact/portfolio" element={<Portfolio />} />
          <Route path="/portfolioReact/contact" element={<Contact />} />
          <Route path="/*" element={<Navigate to="/home" />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
