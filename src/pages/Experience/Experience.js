import React from "react";
import { Link } from "react-router-dom";
import personalwebsite from "../../assets/personalwebsite.png";
import resume from "../../assets/resume.pdf";
import cicero from "../../assets/cicero.png";

import "../App.css";
import Zoom from "react-reveal/Zoom";

const Portfolio = () => (
  <>
    <div className="bodyexp">
      <div className="navbarabout">
        <span className="navbarleft">
          <div className="dropdownexp">
            <button className="navbaritemexp">MENU</button>
            <div class="dropdown-contentexp">
              <Link className="dropdownexp-contentlinkexp" to="/">
                Home
              </Link>
              <Link className="dropdownexp-contentlinkexp" to="/about">
                About
              </Link>
              <Link className="dropdownexp-contentlinkexp" to="/Portfolio">
                Portfolio
              </Link>
              <Link
                className="dropdownexp-contentlinkexp"
                to="/Extracurriculars"
              >
                Extracurriculars
              </Link>
              <Link className="dropdownexp-contentlinkexp" to="/Experience">
                Experience
              </Link>
            </div>
          </div>
        </span>

        <span className="navbarright">
          <a className="navbaritemexp" href="mailto:amaanchau7@gmail.com?">
            CONTACT
          </a>
        </span>
      </div>
      <br />
      <div className="whole">
        <div className="description">
          <div className="Titleexp">Experience</div>
          <hr className="hrexp" />
          <div className="summary">
            <span className="textexp">
              Here will be my information about{" "}
              <b className="boldexp">Internships and Fellowship </b>
              experiences. I am always looking for new opportunities to learn
              and expand my knowledge with. I am a{" "}
              <b className="boldexp">critical thinker</b> and{" "}
              <b className="boldexp">hard worker</b>, and I believe I can offer
              a <b className="boldexp">unique perspective</b> to any problem.
            </span>
          </div>
        </div>
        <p className="scrollexp">SCROLL</p>
        <div className="vertlineexp"></div>

        <Zoom>
          <div className="container">
            <div className="leftabout">
              <div className="subtitleexp">Cicero</div>{" "}
              <span className="textabout">
                <b className="boldexp">Software Engineering Intern</b>
                <br></br>Converting the app.cicero.ly web application into a
                cross-platform mobile app using Apache Cordova and Ionic
                framework. Additionally, I am learning JavaScript, Node.js,
                React & MUI, React-Redux, MongoDB, Mongoose, and Python
                technologies in the process.
              </span>
              <nav className="bottomport">
                <ul className="moreul2">
                  <li className="morelist">
                    <a
                      className="moreexp2"
                      href="https://www.cicero.ly/"
                      target={"_blank"}
                    >
                      Website
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="rightabout">
              <div className="logotitleexp">Present | 2022</div>
              <img
                className="logoexp"
                src={cicero}
                alt="personalwebsite"
                width={320 * 1.2}
                height={180 * 1.2}
              />
            </div>
          </div>
        </Zoom>
        <hr className="sepexp" />

        <Zoom bottom>
          <iframe
            className="frame"
            src={resume}
            width="100%"
            height="600px"
          ></iframe>
        </Zoom>

        <Zoom bottom>
          <div className="footerport">
            <div className="subtitleexp">Contact Me</div>

            <span className="textabout">Email: </span>
            <span className="linksexp">
              <a className="contactlinkexp" href="mailto:amaanchau7@gmail.com?">
                amaanchau7@gmail.com
              </a>
            </span>
            <br />
            <span className="textabout">Phone: </span>
            <span className="linksexp">
              <a className="contactlinkexp" href="tel:2812355003">
                (281) 235-5003
              </a>
            </span>
            <nav className="bottomabout">
              <ul className="moreul">
                <li className="morelist">
                  <a className="moreexp" href="#top">
                    Back To Top
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </Zoom>
      </div>
    </div>
  </>
);

export default Portfolio;
