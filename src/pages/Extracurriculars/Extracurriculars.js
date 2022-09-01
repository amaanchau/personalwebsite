import React from "react";
import { Link } from "react-router-dom";
import personalwebsite from "../../assets/personalwebsite.png";
import tamu from "../../assets/tamu.png";
import coding from "../../assets/coding.png";
import hobby from "../../assets/hobby.jpg";
import "../App.css";
const Extracurriculars = () => (
  <>
    <div className="bodyext">
      <div className="navbarabout">
        <span className="navbarleft">
          <div className="dropdownext">
            <button className="navbaritemext">MENU</button>
            <div class="dropdown-contentext">
              <Link className="dropdownext-contentlinkext" to="/">
                Home
              </Link>
              <Link className="dropdownext-contentlinkext" to="/about">
                About
              </Link>
              <Link className="dropdownext-contentlinkext" to="/Portfolio">
                Portfolio
              </Link>
              <Link
                className="dropdownext-contentlinkext"
                to="/Extracurriculars"
              >
                Extracurriculars
              </Link>
              <Link className="dropdownext-contentlinkext" to="/Experience">
                Experience
              </Link>
            </div>
          </div>
        </span>

        <span className="navbarright">
          <a className="navbaritemext" href="mailto:amaanchau@tamu.edu?">
            CONTACT
          </a>
        </span>
      </div>
      <br />
      <div className="whole">
        <div className="description">
          <div className="Titleext">Extracurriculars</div>
          <hr className="hrext" />
          <div className="summary">
            <span className="textext">
              My name is Amaan Chaudhry, and I am currently a College Sophomore
              attending <span className="tamuabout">Texas A&M University</span>.
              I am greatly interested in
              <b className="boldext"> web/app development</b>, the{" "}
              <b className="boldext">cloud</b>, and{" "}
              <b className="boldext">machine learning. </b>
              Additionally I always strive to increase my knowledge in the field
              of computer science and technology as a whole. We are living in a
              world of technology, and I hope to one day create a lasting impact
              on the field. <b className="boldext">Learning and leading</b> are
              what I do best!
            </span>
          </div>
        </div>
        <p className="scrollext">SCROLL</p>
        <div className="vertlineext"></div>

        <div className="container">
          <div className="leftabout">
            <div className="subtitleext">Education</div>
            <span className="textext">
              I am a <b className="boldext">Sophomore Computer Engineering</b>{" "}
              student at <b className="boldext">Texas A&M University</b> with a
              minor in Mathematics. I currently have a{" "}
              <b className="boldext">4.0 gpa</b> and in the future I plan to
              attend graduate school attain a{" "}
              <b className="boldext">Master of Computer Science </b>
              degree. Additionally, I have graduated from Clear Falls High
              School and was ranked 11th of my class of 630 students. I am a{" "}
              <b className="boldext">lifelong learner</b> and hope to continue
              growing both academically and personally.
            </span>
            <nav className="bottomport">
              <ul className="moreul2">
                <li className="morelist">
                  <a
                    className="moreext2"
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
            <img
              className="logoext"
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
              className="logoext"
              src={coding}
              alt="Coding Picture"
              width={300}
              height={300}
            />
          </div>
          <div className="right2about">
            <div className="subtitleext">Coding</div>
            <span className="textext">
              I am a <b className="boldext">Sophomore Computer Engineering</b>{" "}
              student at <b className="boldext">Texas A&M University</b> with a
              minor in Mathematics. I currently have a{" "}
              <b className="boldext">4.0 gpa</b> and in the future I plan to
              attend graduate school attain a{" "}
              <b className="boldext">Master of Computer Science </b>
              degree. Additionally, I have graduated from Clear Falls High
              School and was ranked 11th of my class of 630 students. I am a{" "}
              <b className="boldext">lifelong learner</b> and hope to continue
              growing both academically and personally.
            </span>
            <nav className="bottomport">
              <ul className="moreul2">
                <li className="morelist">
                  <a
                    className="moreext2"
                    href="https://github.com/amaanchau/personalwebsite"
                    target={"_blank"}
                  >
                    Website
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="container">
          <div className="leftabout">
            <div className="subtitleext">Hobbies</div>
            <span className="textext">
              I am a <b className="boldext">Sophomore Computer Engineering</b>{" "}
              student at <b className="boldext">Texas A&M University</b> with a
              minor in Mathematics. I currently have a{" "}
              <b className="boldext">4.0 gpa</b> and in the future I plan to
              attend graduate school attain a{" "}
              <b className="boldext">Master of Computer Science </b>
              degree. Additionally, I have graduated from Clear Falls High
              School and was ranked 11th of my class of 630 students. I am a{" "}
              <b className="boldext">lifelong learner</b> and hope to continue
              growing both academically and personally.
            </span>
            <nav className="bottomport">
              <ul className="moreul2">
                <li className="morelist">
                  <a
                    className="moreext2"
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
            <img
              className="logoext"
              src={hobby}
              alt="Hobbies Picture"
              width={380}
              height={350}
            />
          </div>
        </div>

        <div className="footerport">
          <div className="subtitleext">Contact Me</div>

          <span className="textext">Email: </span>
          <span className="linksext">
            <a className="contactlinkext" href="mailto:amaanchau@tamu.edu?">
              amaanchau@tamu
            </a>
          </span>
          <br />
          <span className="textext">Phone: </span>
          <span className="linksext">
            <a className="contactlinkext" href="tel:2812355003">
              (281) 235-5003
            </a>
          </span>
          <nav className="bottomabout">
            <ul className="moreul">
              <li className="morelist">
                <a className="moreext" href="#top">
                  Back To Top
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </>
);

export default Extracurriculars;
