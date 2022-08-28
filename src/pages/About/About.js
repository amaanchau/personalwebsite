import React from "react";
import { Link } from "react-router-dom";
import tamu from "../../assets/tamu.png";
import coding from "../../assets/coding.png";
import hobby from "../../assets/hobby.jpg";
import "../App.css";
const About = () => (
  <>
    <div className="bodyabout">
      <div className="navbarabout">
        <span className="navbarleft">
          <a className="navbaritemabout" href="mailto:amaanchau@tamu.edu?">
            MENU
          </a>
        </span>
        <span className="navbarright">
          <a className="navbaritemabout" href="mailto:amaanchau@tamu.edu?">
            CONTACT
          </a>
        </span>
      </div>
      <br />
      <div className="whole">
        <div className="description">
          <div className="Titleabout">About Me</div>
          <hr className="hrabout" />
          <div className="summary">
            <span className="textabout">
              My name is Amaan Chaudhry, and I am currently a College Sophomore
              attending <span className="tamuabout">Texas A&M University</span>.
              I am greatly interested in
              <b className="boldabout"> web/app development</b>, the{" "}
              <b className="boldabout">cloud</b>, and{" "}
              <b className="boldabout">machine learning. </b>
              Additionally I always strive to increase my knowledge in the field
              of computer science and technology as a whole. We are living in a
              world of technology, and I hope to one day create a lasting impact
              on the field. <b className="boldabout">
                Learning and leading
              </b>{" "}
              are what I do best!
            </span>
          </div>
        </div>
        <p className="scrollabout">SCROLL</p>
        <div className="vertlineabout"></div>
        <div className="container">
          <div className="leftabout">
            <div className="subtitleabout">Education</div>
            <span className="textabout">
              I am a <b className="boldabout">Sophomore Computer Engineering</b>{" "}
              student at <b className="boldabout">Texas A&M University</b> with
              a minor in Mathematics. I currently have a{" "}
              <b className="boldabout">4.0 gpa</b> and in the future I plan to
              attend graduate school attain a{" "}
              <b className="boldabout">Master of Computer Science </b>
              degree. Additionally, I have graduated from Clear Falls High
              School and was ranked 11th of my class of 630 students. I am a{" "}
              <b className="boldabout">lifelong learner</b> and hope to continue
              growing both academically and personally.
            </span>
          </div>
          <div className="rightabout">
            <img
              className="logoabout"
              src={tamu}
              alt="TAMU Picture"
              width={350}
              height={300}
            />
          </div>
        </div>
        <div className="container">
          <div className="left2about">
            <img
              className="logoabout"
              src={coding}
              alt="Coding Picture"
              width={300}
              height={300}
            />
          </div>
          <div className="right2about">
            <div className="subtitleabout">Coding</div>
            <span className="textabout">
              I am a <b className="boldabout">Sophomore Computer Engineering</b>{" "}
              student at <b className="boldabout">Texas A&M University</b> with
              a minor in Mathematics. I currently have a{" "}
              <b className="boldabout">4.0 gpa</b> and in the future I plan to
              attend graduate school attain a{" "}
              <b className="boldabout">Master of Computer Science </b>
              degree. Additionally, I have graduated from Clear Falls High
              School and was ranked 11th of my class of 630 students. I am a{" "}
              <b className="boldabout">lifelong learner</b> and hope to continue
              growing both academically and personally.
            </span>
          </div>
        </div>
        <div className="container">
          <div className="leftabout">
            <div className="subtitleabout">Hobbies</div>
            <span className="textabout">
              I am a <b className="boldabout">Sophomore Computer Engineering</b>{" "}
              student at <b className="boldabout">Texas A&M University</b> with
              a minor in Mathematics. I currently have a{" "}
              <b className="boldabout">4.0 gpa</b> and in the future I plan to
              attend graduate school attain a{" "}
              <b className="boldabout">Master of Computer Science </b>
              degree. Additionally, I have graduated from Clear Falls High
              School and was ranked 11th of my class of 630 students. I am a{" "}
              <b className="boldabout">lifelong learner</b> and hope to continue
              growing both academically and personally.
            </span>
          </div>
          <div className="rightabout">
            <img
              className="logoabout"
              src={hobby}
              alt="Hobbies Picture"
              width={380}
              height={350}
            />
          </div>
        </div>

        <div className="footer">
          <div className="subtitleabout">Contact Me</div>

          <span className="textabout">Email: </span>
          <span className="linksabout">
            <a className="contactlinkabout" href="mailto:amaanchau@tamu.edu?">
              amaanchau@tamu
            </a>
          </span>
          <br />
          <span className="textabout">Phone: </span>
          <span className="linksabout">
            <a className="contactlinkabout" href="tel:2812355003">
              (281) 235-5003
            </a>
          </span>
          <nav className="bottomabout">
            <ul>
              <li className="morelist">
                <Link className="moreabout" to="/portfolio">
                  View My Projects
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </>
);

export default About;
