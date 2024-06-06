import React from "react";
import "./About.css";

import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            {
              setPlayState(true);
            }
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow ....</h2>
        <p>
          You can also directly specify the project name and the template you
          want to use via additional command line options. For example, to
          scaffold a Vite + Vue project, run
        </p>
        <p>
          create-vite is a tool to quickly start a project from a basic template
          for popular frameworks. Check out Awesome Vite for community
          maintained templates that include other tools or target different
          frameworks.
        </p>
        <p>
          You can also use a tool like degit to scaffold your project with one
          of the templates. Assuming the project is on GitHub and uses main as
          the default branch, you can create a local copy using:
        </p>
      </div>
    </div>
  );
};

export default About;
