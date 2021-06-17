import React from "react";
import "./menu.scss";

function Menu({ menuOpen, setmenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li
          onClick={() => {
            setmenuOpen(!menuOpen);
          }}
        >
          <a href="#intro">Home</a>
        </li>
        <li
          onClick={() => {
            setmenuOpen(!menuOpen);
          }}
        >
          <a href="#portfolio">Portfolio</a>
        </li>
        <li
          onClick={() => {
            setmenuOpen(!menuOpen);
          }}
        >
          <a href="#works">Work Experience</a>
        </li>
        <li
          onClick={() => {
            setmenuOpen(!menuOpen);
          }}
        >
          <a href="#testimonials">Testimonials</a>
        </li>
        <li
          onClick={() => {
            setmenuOpen(!menuOpen);
          }}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
