import React from "react";
import { Link } from "react-router-dom";
import personalwebsite from "../../assets/personalwebsite.png";
import resume from "../../assets/resume.pdf";
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
          <a className="navbaritemexp" href="mailto:amaanchau@tamu.edu?">
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
              Here will be information about{" "}
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

        {/* <div className="container">
          <div className="leftabout">
            <div className="subtitleexp">Internship</div>
            <span className="textabout">
              I am a <b className="boldexp">Sophomore Computer Engineering</b>{" "}
              student at <b className="boldexp">Texas A&M University</b> with a
              minor in Mathematics. I currently have a{" "}
              <b className="boldexp">4.0 gpa</b> and in the future I plan to
              attend graduate school attain a{" "}
              <b className="boldexp">Master of Computer Science </b>
              degree. Additionally, I have graduated from Clear Falls High
              School and was ranked 11th of my class of 630 students. I am a{" "}
              <b className="boldexp">lifelong learner</b> and hope to continue
              growing both academically and personally.
            </span>
            <nav className="bottomport">
              <ul className="moreul2">
                <li className="morelist">
                  <a
                    className="moreexp2"
                    href="https://github.com/amaanchau/personalwebsite"
                    target={"_blank"}
                  >
                    Website
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="rightabout">
            <div className="logotitleexp">August | 2022</div>
            <img
              className="logoexp"
              src={personalwebsite}
              alt="personalwebsite"
              width={350 * 1.2}
              height={200 * 1.2}
            />
          </div>
        </div> */}
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
              <a className="contactlinkexp" href="mailto:amaanchau@tamu.edu?">
                amaanchau@tamu
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
