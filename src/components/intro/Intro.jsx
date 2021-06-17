import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import "./intro.scss";
import man from "../../assets/shas_cropped_enhance.png";
import down from "../../assets/down.png";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["an Intern", "an AI/ML Enthusiast", "a Developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img alt="img not available" src={man}></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Shashank Reddy</h1>
          <h3>
            Student and <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={down}></img>
        </a>
      </div>
    </div>
  );
}

export default Intro;
