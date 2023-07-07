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
  const [notFound, setNotFound] = React.useState(false);

  React.useEffect(() => {
    // Check if the current path matches any valid routes
    const validRoutes = [
      "/portfolioReact/home",
      "/portfolioReact/about",
      "/portfolioReact/portfolio",
      "/portfolioReact/contact",
      "/",
    ];
    const currentPath = window.location.pathname;
    const isValidRoute = validRoutes.includes(currentPath);

    // Set the notFound state based on whether the current path is a valid route
    setNotFound(!isValidRoute);
  }, []);
  return (
    <div>
      {notFound ? (
        <div>
          <Route path="/" element={<Page404 />} />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default App;
