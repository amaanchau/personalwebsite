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
          <span className="textabout"> I am a{" "} <b className="boldabout">Senior Computer Engineering</b>{" "} student at <b className="tamuabout">Texas A&M University</b>{" "} in a fast-track program, currently taking{" "} <b className="boldabout">master-level courses</b>. I am passionate about{" "} <b className="boldabout">software development</b>,{" "} <b className="boldabout">cloud computing and AWS</b>,{" "} <b className="boldabout">AI/machine learning</b>, and{" "} <b className="boldabout">UI/front-end development</b>. I always strive to increase my knowledge in{" "} <b className="boldabout">computer science</b> and{" "} <b className="boldabout">technology</b> as a whole. We are living in a{" "} <b className="boldabout">world of technology</b>, and I hope to one day{" "} <b className="boldabout">create a lasting impact</b> on the field.{" "} <b className="boldabout">Learning</b> and <b className="boldabout">leading</b>{" "} are what I do best! </span>
          </div>
        </div>
        <p className="scrollabout">SCROLL</p>
        <div className="vertlineabout"></div>
        <Zoom bottom>
          <div className="container">
            <div className="leftabout">
              <div className="subtitleabout">Education</div>
              <span className="textabout"> I am a <b className="boldabout">senior Computer Engineering</b> student at <b className="boldabout">Texas A&M University</b> with a minor in Mathematics, currently taking <b className="boldabout">master-level courses</b> in Computer Science. I have a <b className="boldabout">3.8 GPA</b> and plan to earn a <b className="boldabout">Master of Computer Science</b> degree. I am honored to have received the <b className="boldabout">Dean's Honor Award</b> for outstanding academic excellence. My coursework includes Program Design, Data Structures & Algorithms, Discrete Math, Computer Architecture, Computer Systems, Software Engineering, Microcomputer Systems, Database Systems, Machine Learning, Statistics, Software Security, and Cybersecurity. I am passionate about continuing to grow academically and professionally to make a meaningful impact in technology. </span>
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
              <span className="textabout"> My coding journey started in junior year of <b className="boldabout">high school</b> when I took my first computer science class. I fell in love immediately as the subject always posed considerable challenges, but overcoming them gave me a sense of <b className="boldabout">satisfaction</b> like no other. This passion led me to pursue <b className="boldabout">computer engineering</b>. Over the years, I have gained significant professional experience through internships and collaborations with companies such as <b className="boldabout">A&M Research</b>, <b className="boldabout">Cicero</b>, <b className="boldabout">USAA</b>, and <b className="boldabout">State Farm</b>. Through these opportunities and continuous learning, I have developed expertise in many <b className="boldabout">languages, frameworks, and tools</b>, further fueling my passion for technology and innovation. </span>
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
