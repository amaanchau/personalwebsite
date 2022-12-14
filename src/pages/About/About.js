import React from "react";
import { Link } from "react-router-dom";
import tamu from "../../assets/tamu.png";
import coding from "../../assets/coding.png";
import hobby from "../../assets/hobby.jpg";
import "../App.css";
import Zoom from "react-reveal/Zoom";

const About = () => (
  <>
    <div className="bodyabout">
      <div className="navbarabout">
        <span className="navbarleft">
          <div className="dropdownabout">
            <button className="navbaritemabout">MENU</button>
            <div class="dropdown-contentabout">
              <Link className="dropdownabout-contentlinkabout" to="/">
                Home
              </Link>
              <Link className="dropdownabout-contentlinkabout" to="/about">
                About
              </Link>
              <Link className="dropdownabout-contentlinkabout" to="/Portfolio">
                Portfolio
              </Link>
              <Link
                className="dropdownabout-contentlinkabout"
                to="/Extracurriculars"
              >
                Extracurriculars
              </Link>
              <Link className="dropdownabout-contentlinkabout" to="/Experience">
                Experience
              </Link>
            </div>
          </div>
        </span>
        <span className="navbarright">
          <a className="navbaritemabout" href="mailto:amaanchau7@gmail.com?">
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
        <Zoom bottom>
          <div className="container">
            <div className="leftabout">
              <div className="subtitleabout">Education</div>
              <span className="textabout">
                I am a{" "}
                <b className="boldabout">Sophomore Computer Engineering</b>{" "}
                student at <b className="boldabout">Texas A&M University</b>{" "}
                with a minor in Mathematics. I currently have a{" "}
                <b className="boldabout">4.0 GPA</b> and in the future I plan to
                attend graduate school attain a{" "}
                <b className="boldabout">Master of Computer Science </b>
                degree. Additionally, I have graduated from Clear Falls High
                School and was ranked 11th of my class of 630 students. I am a{" "}
                <b className="boldabout">lifelong learner</b> and hope to
                continue growing both academically and personally.
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
        </Zoom>
        <Zoom bottom>
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
                My coding journey started in junior year of{" "}
                <b className="boldabout">high school</b> when I took my first
                computer science class. I fell in love immediately as the
                subject always posed considerable challenges to me, but when I
                overcame them, I experienced a feeling of{" "}
                <b className="boldabout">satisfaction</b> unrivaled to anything
                I've experienced before. I took multiple other comp sci classes
                in high school which have lead me to pursuing{" "}
                <b className="boldabout">computer engineering</b>. Through these
                classes and other outside learning I have learned many{" "}
                <b className="boldabout">
                  languages, frameworks, and tools of the internet.
                </b>
              </span>
            </div>
          </div>
        </Zoom>
        <Zoom bottom>
          <div className="container">
            <div className="leftabout">
              <div className="subtitleabout">Hobbies</div>
              <span className="textabout">
                In my free time, I enjoy playing/watching{" "}
                <b className="boldabout">sports</b>, working out, spending time
                with family and friends, reading, and
                <b className="boldabout"> gaming</b> . I also love outdoor
                activities such as
                <b className="boldabout"> hiking, fishing, and kayaking</b> . I
                love <b className="boldabout">eating</b> (especially asian
                food). <b className="boldabout">Traveling</b> is also something
                I haven't done much of, but in the future I hope to travel the
                world and experience as many cultures as I can. I have recently
                taken up
                <b className="boldabout"> cooking</b> and have been learning a
                lot of new recipes.
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
        </Zoom>
        <Zoom bottom>
          <div className="footer">
            <div className="subtitleabout">Contact Me</div>

            <span className="textabout">Email: </span>
            <span className="linksabout">
              <a
                className="contactlinkabout"
                href="mailto:amaanchau7@gmail.com?"
              >
                amaanchau7@gmail.com
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
        </Zoom>
      </div>
    </div>
  </>
);

export default About;
