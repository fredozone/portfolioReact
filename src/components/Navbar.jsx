import React from "react";
import "./../menu.css";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <section className="menu" id="phone-view">
      {/* <a href="index.html"> */}
      <NavLink to="/">
        <div
          className="menu-style aling-content-center"
          data-original-title="Home"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path>
          </svg>
        </div>
      </NavLink>
      {/* </a> */}
      {/* <a href="about.html"> */}
      <NavLink to="/about">
        <div
          className="menu-style aling-content-center"
          data-original-title="About"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </NavLink>
      {/* </a> */}
      {/* <a href="portfolio.html"> */}
      <NavLink to="/portfolio">
        <div
          className="menu-style aling-content-center"
          data-original-title="Work"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M352 144v-39.6C352 82 334 64 311.6 64H200.4C178 64 160 82 160 104.4V144H48v263.6C48 430 66 448 88.4 448h335.2c22.4 0 40.4-18 40.4-40.4V144H352zm-40 0H200v-40h112v40z"></path>
          </svg>
        </div>
        {/* </a> */}
      </NavLink>
      {/* <a href="contact.html"> */}
      <NavLink to="/contact">
        <div
          className="menu-style aling-content-center"
          data-original-title="Contact"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path>
          </svg>
        </div>
      </NavLink>
      {/* </a> */}
    </section>
  );
};

export default Navbar;
