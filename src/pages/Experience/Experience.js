import React from "react";
import { Link } from "react-router-dom";
import personalwebsite from "../../assets/personalwebsite.png";
import resume from "../../assets/resume.pdf";
import cicero from "../../assets/cicero.png";
import usaa from "../../assets/USAA.png";

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
              <div className="subtitleexp">USAA</div>{" "}
              <span className="textabout">
                <b className="boldexp">Software Engineering Intern</b>
                <br></br>
                As a Software Engineer Intern at USAA, I supported and developed a robust data pipeline for transferring large-scale raw data into S3 buckets. By implementing Terraform Rover, a visualization tool, I streamlined the review process of Terraform plans, saving significant time. This experience expanded my knowledge in Terraform, cloud technologies, and AWS. I conducted thorough testing and debugging to ensure the pipeline's functionality and quality. Additionally, I prepared progress reports and presentations for effective communication with the team and management.
              </span>
              <nav className="bottomport">
                <ul className="moreul2">
                  <li className="morelist">
                    <a
                      className="moreexp2"
                      href="https://www.usaa.com/"
                      target={"_blank"}
                    >
                      Website
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="rightabout">
              <div className="logotitleexp">May 2023 | August 2023 </div>
              <img
                className="logoexp"
                src={usaa}
                alt="personalwebsite"
                width={320 * 1.2}
                height={180 * 1.2}
              />
            </div>
          </div>
        </Zoom>
        <hr className="sepexp" />

        <Zoom>
          <div className="container">
            <div className="leftabout">
              <div className="subtitleexp">Cicero</div>{" "}
              <span className="textabout">
                <b className="boldexp">Software Engineering Intern</b>
                <br></br>During my internship at Cicero.ly, I led the migration of the React app to the Remix framework, optimizing loading times and performance. I also converted the Cicero web app into a cross-platform mobile app using the Capacitor framework. Streamlining the onboarding process, I enhanced efficiency and user experience while resolving UI bugs. These experiences enriched my skills in React and front-end development, deepening my passion for creating intuitive user experiences.
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
              <div className="logotitleexp"> Oct 2022 | May 2023 </div>
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
