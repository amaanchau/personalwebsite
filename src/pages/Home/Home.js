import React from "react";
import profpic from "../../assets/profpic.jpg";
import linkedinlogo from "../../assets/linkedinlogo.png";
import githublogo from "../../assets/githublogo.png";
import resumelogo from "../../assets/resumelogo.png";
import resume from "../../assets/resume.pdf";
import { Link } from "react-router-dom";
import "../App.css";
import Zoom from "react-reveal/Zoom";

const Home = () => (
  <>
    <div className="body">
      <div className="navbar">
        <span className="navbarleft">
          <div className="dropdown">
            <button className="navbaritem">MENU</button>
            <div class="dropdown-content">
              <Link className="dropdown-contentlink" to="/">
                Home
              </Link>
              <Link className="dropdown-contentlink" to="/about">
                About
              </Link>
              <Link className="dropdown-contentlink" to="/Portfolio">
                Portfolio
              </Link>
              <Link className="dropdown-contentlink" to="/Extracurriculars">
                Extracurriculars
              </Link>
              <Link className="dropdown-contentlink" to="/Experience">
                Experience
              </Link>
            </div>
          </div>
        </span>
        <span className="navbarright">
          <a className="navbaritem" href="mailto:amaanchau7@gmail.com?">
            CONTACT
          </a>
        </span>
      </div>
      <br />
      <div className="left">
        <div className="Title">Howdy, World</div>
        <hr />
        <div className="middleleftcontent">
          <span className="text">My name is </span>
          <span className="name">Amaan Chaudhry</span>
          <span className="text">, and I'm a student at </span>
          <span className="tamu">Texas A&M University</span>
          <span className="text">.</span>
          <br />
          <span className="text">I'm currently a</span>
          <span className="name"> software engineering intern </span>
          <span className="text">at</span>
          <span className="tamu"> State Farm</span>

          <br />
          <br />
          <span className="text">Email: </span>
          <span className="links">
            <a className="contactlink" href="mailto:amaanchau7@gmail.com?">
              amaanchau7@gmail.com
            </a>
          </span>
          <br />
          <span className="text">Phone: </span>
          <span className="links">
            <a className="contactlink" href="tel:2812355003">
              (281) 235-5003
            </a>
          </span>
          <br />

          <p className="quicklinkheader">Quick Links:</p>
          <nav>
            <ul>
              <li className="quicklinklist">
                <a
                  target="_blank"
                  className="quicklinks"
                  href="https://www.linkedin.com/in/amaan-chaudhry"
                >
                  <img
                    className="quicklinkpics"
                    src={linkedinlogo}
                    alt="linkedin logo"
                  />
                  Linkedin
                </a>
              </li>
              <li className="quicklinklist">
                <a className="quicklinks" target="_blank" href={resume}>
                  <img
                    className="quicklinkpics"
                    src={resumelogo}
                    alt="linkedin logo"
                  />
                  Resume
                </a>
              </li>
              <li className="quicklinklist">
                <a
                  target="_blank"
                  className="quicklinks"
                  href="https://github.com/amaanchau"
                >
                  <img
                    className="quicklinkpics"
                    src={githublogo}
                    alt="linkedin logo"
                  />
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="right">
        <img className="profpic" src={profpic} alt="Profile Picture" />
      </div>

      <nav className="bottom">
        <ul>
          <li className="morelist">
            <Link className="more" to="/portfolio">
              View My Projects
            </Link>
          </li>
          <li className="morelist">
            <Link className="more" to="/about">
              Learn More About Me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </>
);

export default Home;
