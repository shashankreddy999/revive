import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

function Topbar({ menuOpen, setmenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            revive.io
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91-984-996-5690</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>bshashankreddy2209@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div
            className="hamburger"
            onClick={() => {
              setmenuOpen(!menuOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
