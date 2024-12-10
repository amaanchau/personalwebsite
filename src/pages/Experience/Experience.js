import React from "react";
import { Link } from "react-router-dom";
import personalwebsite from "../../assets/personalwebsite.png";
import resume from "../../assets/resume.pdf";
import cicero from "../../assets/cicero.png";
import usaa from "../../assets/USAA.png";
import statefarm from "../../assets/statefarm.jpg"
import tamu from "../../assets/tamu.jpg"
import outlier from "../../assets/outlier.png"
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
              <div className="subtitleexp">Statefarm</div>{" "}
              <span className="textabout">
                <b className="boldexp">Software Engineering Intern</b>
                <br></br>
                I designed and implemented AWS resources, including Lambda, Glue, DynamoDB, S3, API Gateway, and Athena, to optimize the architecture of a data profiling tool, significantly enhancing data quality and integrity across datasets in the data catalog. I developed and deployed RESTful APIs using API Gateway and Lambda, enabling seamless integration between front-end and back-end components to deliver a high-performance data profiling solution capable of processing large datasets within seconds to minutes. Additionally, I automated infrastructure provisioning using Terraform and built a GitLab CI pipeline, improving scalability and reducing manual effort. Collaborating closely with the UI team, I enhanced React front-end features by resolving over 10 bugs and improving the overall user experience for end-users.
              </span>
              <nav className="bottomport">
                <ul className="moreul2">
                  <li className="morelist">
                    <a
                      className="moreexp2"
                      href="https://www.statefarm.com/careers/"
                      target={"_blank"}
                    >
                      Website
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="rightabout">
              <div className="logotitleexp">May 2024 | Present </div>
              <img
                className="logoexp"
                src={statefarm}
                alt="statefarm logo"
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
              <div className="subtitleexp">Outlier AI</div>{" "}
              <span className="textabout">
                <b className="boldexp">AI Training Associate</b>
                <br></br>
                As an AI Training Associate at Outlier, I work with experts to enhance AI models for math and computer science. My role involves evaluating and refining model responses to ensure accuracy and relevance, applying my background in computer science, math, and AI to real-world problems and innovative educational solutions.              </span>
              <nav className="bottomport">
                <ul className="moreul2">
                  <li className="morelist">
                    <a
                      className="moreexp2"
                      href="https://outlier.ai/"
                      target={"_blank"}
                    >
                      Website
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="rightabout">
              <div className="logotitleexp">June 2024 | Present </div>
              <img
                className="logoexp"
                src={outlier}
                alt="outlier logo"
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
              <div className="subtitleexp">Texas A&M Autonomous Systems Laboratory</div>{" "}
              <span className="textabout">
                <b className="boldexp">Research Assistant/Software Developer</b>
                <br></br>
                I participated in the development of vision-based traffic sign detection, focusing on identifying stop signs, speed limits, rail crossing signs, and construction signs. Using YOLOv5 algorithms and ROS, I implemented object detection and tracking in Python and C++. Additionally, I contributed to the prestigious AutoDrive Challenge, collaborating with professors, General Motors mentors, PhD students, and fellow undergraduates to build a fully autonomous passenger vehicle capable of navigating urban and rural driving courses.
              </span>
              <nav className="bottomport">
                <ul className="moreul2">
                  <li className="morelist">
                    <a
                      className="moreexp2"
                      href="https://autonomy.engr.tamu.edu/"
                      target={"_blank"}
                    >
                      Website
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="rightabout">
              <div className="logotitleexp">Sep 2023 | May 2023 </div>
              <img
                className="logoexp"
                src={tamu}
                alt="tamu logo"
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
              <div className="subtitleexp">USAA</div>{" "}
              <span className="textabout">
                <b className="boldexp">Software Engineering Intern</b>
                <br></br>
                I designed and implemented a serverless solution using AWS Lambda to automate the conversion of large CSV files to JSON. This process included data validation, transformation, and enrichment upon file upload to S3, ensuring efficient handling of complex datasets at scale. Additionally, I integrated Terraform Rover, a visualization tool, into the GitLab pipeline, which resulted in a 20% increase in plan approval speed and significant time savings across projects.
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
                <br></br>During my internship at Cicero.ly, I optimized the onboarding process, reducing time by approximately 25% and significantly improving the user experience. I resolved various UI bugs, leading to enhanced app performance and stability. Additionally, I transformed the Cicero web app into a cross-platform mobile application using the Capacitor framework, expanding its accessibility and usability. Furthermore, I spearheaded the migration of the React app to the Remix framework, leveraging server-side rendering to achieve a 30% improvement in content loading times and a noticeable boost in overall app performance. These experiences strengthened my skills in front-end development and fueled my passion for creating seamless, intuitive user experiences.
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
