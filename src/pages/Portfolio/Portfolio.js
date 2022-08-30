import React from "react";
import { Link } from "react-router-dom";
import personalwebsite from "../../assets/personalwebsite.png";
import "../App.css";
const Portfolio = () => (
  <>
    <div className="bodyport">
      <div className="navbarabout">
        <span className="navbarleft">
          <div className="dropdownport">
            <button className="navbaritemport">MENU</button>
            <div class="dropdown-contentport">
              <Link className="dropdownport-contentlinkport" to="/">
                Home
              </Link>
              <Link className="dropdownport-contentlinkport" to="/about">
                About
              </Link>
              <Link className="dropdownport-contentlinkport" to="/Portfolio">
                Portfolio
              </Link>
              <Link
                className="dropdownport-contentlinkport"
                to="/Extracurriculars"
              >
                Extracurriculars
              </Link>
              <Link className="dropdownport-contentlinkport" to="/Experience">
                Experience
              </Link>
            </div>
          </div>
        </span>

        <span className="navbarright">
          <a className="navbaritemport" href="mailto:amaanchau@tamu.edu?">
            CONTACT
          </a>
        </span>
      </div>
      <br />
      <div className="whole">
        <div className="description">
          <div className="Titleport">Portfolio</div>
          <hr className="hrport" />
          <div className="summary">
            <span className="textport">
              My name is Amaan Chaudhry, and I am currently a College Sophomore
              attending <span className="tamuabout">Texas A&M University</span>.
              I am greatly interested in
              <b className="boldport"> web/app development</b>, the{" "}
              <b className="boldport">cloud</b>, and{" "}
              <b className="boldport">machine learning. </b>
              Additionally I always strive to increase my knowledge in the field
              of computer science and technology as a whole. We are living in a
              world of technology, and I hope to one day create a lasting impact
              on the field. <b className="boldport">Learning and leading</b> are
              what I do best!
            </span>
          </div>
        </div>
        <p className="scrollport">SCROLL</p>
        <div className="vertlineport"></div>

        <div className="container">
          <div className="leftabout">
            <div className="subtitleport">Personal Website</div>
            <span className="textabout">
              I am a <b className="boldport">Sophomore Computer Engineering</b>{" "}
              student at <b className="boldport">Texas A&M University</b> with a
              minor in Mathematics. I currently have a{" "}
              <b className="boldport">4.0 gpa</b> and in the future I plan to
              attend graduate school attain a{" "}
              <b className="boldport">Master of Computer Science </b>
              degree. Additionally, I have graduated from Clear Falls High
              School and was ranked 11th of my class of 630 students. I am a{" "}
              <b className="boldport">lifelong learner</b> and hope to continue
              growing both academically and personally.
            </span>
            <nav className="bottomport">
              <ul className="moreul2">
                <li className="morelist">
                  <a
                    className="moreport2"
                    href="https://github.com/amaanchau/personalwebsite"
                    target={"_blank"}
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="rightabout">
            <div className="logotitle">August | 2022</div>
            <img
              className="logoport"
              src={personalwebsite}
              alt="personalwebsite"
              width={350 * 1.2}
              height={200 * 1.2}
            />
          </div>
        </div>
        {/* <hr className="sep" />
        <div className="container">
          <div className="leftabout">
            <div className="subtitleport">Personal Website</div>
            <span className="textabout">
              I am a <b className="boldport">Sophomore Computer Engineering</b>{" "}
              student at <b className="boldport">Texas A&M University</b> with a
              minor in Mathematics. I currently have a{" "}
              <b className="boldport">4.0 gpa</b> and in the future I plan to
              attend graduate school attain a{" "}
              <b className="boldport">Master of Computer Science </b>
              degree. Additionally, I have graduated from Clear Falls High
              School and was ranked 11th of my class of 630 students. I am a{" "}
              <b className="boldport">lifelong learner</b> and hope to continue
              growing both academically and personally.
            </span>
            <nav className="bottomport">
              <ul className="moreul2">
                <li className="morelist">
                  <a
                    className="moreport2"
                    href="https://github.com/amaanchau/personalwebsite"
                    target={"_blank"}
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="rightabout">
            <div className="logotitle">August | 2022</div>
            <img
              className="logoport"
              src={personalwebsite}
              alt="personalwebsite"
              width={350 * 1.2}
              height={200 * 1.2}
            />
          </div>
        </div>
        <hr className="sep" />

        <div className="container">
          <div className="leftabout">
            <div className="subtitleport">Personal Website</div>
            <span className="textabout">
              I am a <b className="boldport">Sophomore Computer Engineering</b>{" "}
              student at <b className="boldport">Texas A&M University</b> with a
              minor in Mathematics. I currently have a{" "}
              <b className="boldport">4.0 gpa</b> and in the future I plan to
              attend graduate school attain a{" "}
              <b className="boldport">Master of Computer Science </b>
              degree. Additionally, I have graduated from Clear Falls High
              School and was ranked 11th of my class of 630 students. I am a{" "}
              <b className="boldport">lifelong learner</b> and hope to continue
              growing both academically and personally.
            </span>
            <nav className="bottomport">
              <ul className="moreul2">
                <li className="morelist">
                  <a
                    className="moreport2"
                    href="https://github.com/amaanchau/personalwebsite"
                    target={"_blank"}
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="rightabout">
            <div className="logotitle">August | 2022</div>
            <img
              className="logoport"
              src={personalwebsite}
              alt="personalwebsite"
              width={350 * 1.2}
              height={200 * 1.2}
            />
          </div>
        </div> */}

        <div className="footerport">
          <div className="subtitleport">Contact Me</div>

          <span className="textabout">Email: </span>
          <span className="linksport">
            <a className="contactlinkport" href="mailto:amaanchau@tamu.edu?">
              amaanchau@tamu
            </a>
          </span>
          <br />
          <span className="textabout">Phone: </span>
          <span className="linksport">
            <a className="contactlinkport" href="tel:2812355003">
              (281) 235-5003
            </a>
          </span>
          <nav className="bottomabout">
            <ul className="moreul">
              <li className="morelist">
                <Link className="moreport" to="/Extracurriculars">
                  View My Extracurriculars
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </>
);

export default Portfolio;
