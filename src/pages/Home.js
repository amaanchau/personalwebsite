import React from "react";
import profpic from "../assets/profpic.jpg";
import resume from "../assets/resume.pdf";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => (
  <>
    <div className="body">
      <div className="navbar">
        <span className="navbarleft">
          <a className="navbaritem" href="mailto:amaanchau@tamu.edu?">
            MENU
          </a>
        </span>
        <span className="navbarright">
          <a className="navbaritem" href="mailto:amaanchau@tamu.edu?">
            CONTACT
          </a>
        </span>
      </div>
      <br />
      <div className="left">
        <div className="Title">Howdy, World</div>
        <hr />
        <span>My name is </span>
        <span className="name">Amaan Chaudhry</span>
        <span>, and I'm a student at </span>
        <span className="tamu">Texas A&M University</span>
        <span>.</span>
        <br />
        <span>Email: </span>
        <span className="links">
          <a className="contactlink" href="mailto:amaanchau@tamu.edu?">
            amaanchau@tamu
          </a>
        </span>
        <br />
        <span>Phone: </span>
        <span className="links">
          <a className="contactlink" href="tel:2812355003">
            (281) 235-5003
          </a>
        </span>
        <br />

        <p className="name">Quick Links:</p>
        <nav>
          <ul>
            <li>
              <a href="www.linkedin.com/in/amaan-chaudhry">Linkedin</a>
            </li>
            <li>
              <a href={resume}>Resume</a>
            </li>
            <li>
              <a href="https://github.com/amaanchau">Github</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="right">
        <img src={profpic} alt="Profile Picture" width="200" height="200" />

        <nav>
          <ul>
            <li>
              <Link to="/portfolio">View My Projects</Link>
            </li>
            <li>
              <Link to="/about">Learn More About Me</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </>
);

export default Home;
