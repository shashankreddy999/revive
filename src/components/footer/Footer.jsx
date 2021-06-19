import { React } from "react";
import { Button } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import "./footer.scss";
import TextField from "@material-ui/core/TextField";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  return (
    <div className="footer" id="contact">
      <div className="top">
        <div className="contactform">
          <h1>Contact Me</h1>
          <div className="form">
            <div className="details">
              <TextField
                style={{
                  fontSize: 40,
                  backgroundColor: fade("#fff", 0.7),
                  borderRadius: 20,
                  width: "40%",
                  paddingTop: 5,
                  paddingRight: 10,
                  paddingLeft: 10,
                  marginBottom: 20,
                  marginTop: 20,
                }}
                placeholder="Email"
                onChange={(e) => {}}
              />
              <TextField
                style={{
                  fontSize: 40,
                  backgroundColor: fade("#fff", 0.7),
                  borderRadius: 20,
                  width: "40%",
                  paddingTop: 5,
                  paddingRight: 10,
                  paddingLeft: 10,
                  marginBottom: 20,
                  marginTop: 20,
                }}
                placeholder="Name"
                onChange={(e) => {}}
              />
            </div>
            <TextField
              style={{
                fontSize: 40,
                backgroundColor: fade("#fff", 0.7),
                color: "#fff",
                borderRadius: 20,
                width: "63%",
                paddingTop: 5,
                paddingRight: 10,
                paddingLeft: 10,
                marginBottom: 20,
              }}
              multiline={true}
              rows="9"
              placeholder="Your Message"
              onChange={(e) => {}}
            />
          </div>
          <Button
            variant="contained"
            color="#1d3354"
            style={{ backgroundColor: "#1d3354", color: "#fff", padding: 10 }}
          >
            Submit
          </Button>
        </div>
      </div>
      <div className="bottom">
        <div className="desc">
          <h2>revive.io</h2>
          <p>
            revive.io is the one stop place to know all about me and what I do.
            You can know more about me by visiting my social media links. Yeah
            yes, I accept my remuneration in chocolates and pizzas.
          </p>
        </div>
        <div className="links">
          <h2>Get in touch</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/shashank-reddy-boyapally-938bba167/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon></LinkedInIcon>
                <span>Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/shashankreddy999"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon></GitHubIcon>
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/shashank._reddy_/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon></InstagramIcon>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Shashank_Reddy6"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon />
                <span>Twitter</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="more"></div>
      </div>
    </div>
  );
}

export default Footer;
