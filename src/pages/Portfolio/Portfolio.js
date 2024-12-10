import React from "react";
import { Link } from "react-router-dom";
import personalwebsite from "../../assets/personalwebsite.png";
import stock from "../../assets/stock.png";
import groupfly from "../../assets/groupfly.png";
import aggiebus from "../../assets/aggiebus.png";
import revs from "../../assets/revs.png"
import studyfocus from "../../assets/studyfocus.png"
import slide from "../../assets/slide.png"
import "../App.css";
import Zoom from "react-reveal/Zoom";
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
          <a className="navbaritemport" href="mailto:amaanchau7@gmail.com?">
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
          <span className="textport"> As a Computer Engineering student at Texas A&M University, I have a strong technical foundation in Python, Java, C++, and web development with Next.js, React.js, HTML, CSS, JavaScript, and Tailwind. I am also skilled in SQL, ROS, Assembly, Scheme, and Verilog, with experience using Linux, Git/GitHub/GitLab, AWS, Terraform, CI/CD pipelines, robotics, and CAD.
          I hold certifications such as the <a className="ccp" href="https://www.credly.com/badges/c837d3fa-c93b-4375-b34f-3fe623268a8a/linked_in_profile" target="_blank">
          AWS Certified Cloud Practitioner
          </a> and have completed the JPMorgan Software Engineering Virtual Experience. My passion for learning and problem-solving drives my commitment to creating impactful technological solutions.
          </span>
          </div>
        </div>
        <p className="scrollport">SCROLL</p>
        <div className="vertlineport"></div>

        <Zoom bottom>
          <div className="container">
            <div className="leftabout">
              <div className="subtitleport">Powerpoint Accessibility & Style Guide Checker
              </div>
              <span className="textabout"> Participated in a State Farm-exclusive hackathon, where I helped develop an app that checks PowerPoint presentations for accessibility and style guide adherence, offering instant feedback to enhance presentation consistency and readability. The app ensures font consistency, proper text alignment, and readability, while also enhancing image visibility for users with color vision deficiencies by utilizing the LMS Daltonization algorithm. Built the app using a React frontend, Flask for API development, and a Python backend, creating a robust tool to improve presentation quality and accessibility.</span>
              <nav className="bottomport">
                <ul className="moreul2">
                  <li className="morelist">
                    <a
                      className="moreport2"
                      href="https://github.com/SatvikDuddukuru/SF-Hack-Day-2024"
                      target={"_blank"}
                    >
                      Github
                    </a>
                  </li>
                  <li className="morelist">
                    <a
                      className="moreport2"
                      href="https://www.youtube.com/watch?v=ZsWzumS2lqY"
                      target={"_blank"}
                    >
                      Presentation
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="rightabout">
              <div className="logotitle">Jan | 2024</div>
              <img
                className="logoport"
                src={slide}
                alt="accessi slide picture"
                width={350 * 1.2}
                height={200 * 1.2}
              />
            </div>
          </div>
        </Zoom>
        <hr className="sep" />
        <Zoom bottom>
          <div className="container">
            <div className="leftabout">
              <div className="subtitleport">Rev's Grille Point-of-Sale Cloud Based Full Stack Application
              </div>
              <span className="textabout"> Engineered a feature-rich POS system leveraging Next.js, React, Node.js, AWS, and PostgreSQL technologies for efficient order and inventory management, and a comprehensive visualization dashboard for trends and insights. Integrated OAuth for authentication and role-based permissions, incorporating Weather and Translation APIs for enhanced user experience. Additionally, implemented a text size adjustment feature and mobile-friendly UI Collaborated via GitHub projects and Agile methodology, with Jest and Playwright ensuring robust unit and end-to-end testing.
              </span>
              <nav className="bottomport">
                <ul className="moreul2">
                  <li className="morelist">
                    <a
                      className="moreport2"
                      href="https://docs.google.com/presentation/d/1inivabh33x17DMVmfXHaGdGB8AjjtqSWp3B4wi9qsHQ/edit#slide=id.g2d107010e5a_0_51"
                      target={"_blank"}
                    >
                      Website
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="rightabout">
              <div className="logotitle">Jan | 2024</div>
              <img
                className="logoport"
                src={revs}
                alt="revs website"
                width={350 * 1.2}
                height={200 * 1.2}
              />
            </div>
          </div>
        </Zoom>
        <hr className="sep" />
        <Zoom bottom>
          <div className="container">
            <div className="leftabout">
              <div className="subtitleport">Study Focuser Pomodoro Physical Device              </div>
              <span className="textabout"> Engineered a study aid using a Raspberry Pi, orchestrating structured study intervals while seamlessly integrating distraction detection. Designed blueprints and fabricated the physical enclosure using wood and screws, securely wiring the hardware electronics to the Pi. Developed Python scripts with OpenCV for gaze detection, allowing the system to detect user distractions, such as phone usage. When distractions are detected, the user's timer is paused, and a red LED alert is triggered for immediate attention.
              </span>
              <nav className="bottomport">
                <ul className="moreul2">
                  <li className="morelist">
                    <a
                      className="moreport2"
                      href="https://github.com/amaanchau/StudyFocuser"
                      target={"_blank"}
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="rightabout">
              <div className="logotitle">Jan | 2024</div>
              <img
                className="logoport"
                src={studyfocus}
                alt="study website"
                width={350 * 1.2}
                height={200 * 1.2}
              />
            </div>
          </div>
        </Zoom>
        <hr className="sep" />
        <Zoom bottom>
          <div className="container">
            <div className="leftabout">
              <div className="subtitleport">GroupFly</div>
              <span className="textabout"> Pioneering the development of a sophisticated centralized flight booking application tailored for group travel, seamlessly integrating up-to-the-minute flight data from the Amadeus API through advanced web scraping techniques. <br /> Designing an intuitive and visually appealing front-end using HTML and CSS with the Tailwind CSS framework, while ensuring secure user authentication through OAuth API on Firebase. <br /> Orchestrating the deployment for seamless internet access, utilizing AWS EC2, S3, and Route53 services for optimal performance. </span>
              <nav className="bottomport">
                <ul className="moreul2">
                  <li className="morelist">
                    <a
                      className="moreport2"
                      href="https://github.com/8SK3PS8/GroupFly"
                      target={"_blank"}
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="rightabout">
              <div className="logotitle">Dec | 2022</div>
              <img
                className="logoport"
                src={groupfly}
                alt="GroupFly website"
                width={350 * 1.2}
                height={200 * 1.2}
              />
            </div>
          </div>
        </Zoom>
        <hr className="sep" />
        <Zoom bottom>
          <div className="container">
            <div className="leftabout">
              <div className="subtitleport">AggieBus.AI</div>
              <span className="textabout">
                Project member for Aggie Coding Club project AggieBus.AI
                <br />
                Front end web developer for an application that displays
                predicted bus stop times and capacity based on several factors.
                <br />
                Developing front end using React.js, HTML, CSS, and JS.
              </span>
              <nav className="bottomport">
                <ul className="moreul2">
                  <li className="morelist">
                    <a
                      className="moreport2"
                      href="https://github.com/amaanchau"
                      target={"_blank"}
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="rightabout">
              <div className="logotitle">Present | 2022</div>
              <img
                className="logoport"
                src={aggiebus}
                alt="AggieBus logo"
                width={350 * 1.2}
                height={200 * 1.2}
              />
            </div>
          </div>
        </Zoom>
        <hr className="sep" />
        <Zoom bottom>
          <div className="container">
            <div className="leftabout">
              <div className="subtitleport">Stock Predictor Web App</div>
              <span className="textabout">
              Developed a dynamic LSTM-based web application for precise stock price prediction, integrating Yahoo Finance data through efficient Pandas and NumPy scraping, and utilizing Matplotlib for insightful visualizations, achieving 85% accuracy in daily stock predictions. Successfully deployed the interactive Python Streamlit app on AWS EC2 and Route53, ensuring seamless online access for users.
              </span>
              <nav className="bottomport">
                <ul className="moreul2">
                  <li className="morelist">
                    <a
                      className="moreport2"
                      href="https://github.com/amaanchau/stock-predictor-fin"
                      target={"_blank"}
                    >
                      GitHub
                    </a>
                    <a
                      className="moreport2"
                      href="http://stock-predictor.amaanchau.com"
                      target={"_blank"}
                    >
                      Website
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="rightabout">
              <div className="logotitle">September | 2022</div>
              <img
                className="logoport"
                src={stock}
                alt="stock prediction website"
                width={350 * 1.2}
                height={200 * 1.2}
              />
            </div>
          </div>
        </Zoom>
        <hr className="sep" />
        <Zoom bottom>
          <div className="container">
            <div className="leftabout">
              <div className="subtitleport">Personal Website</div>
              <span className="textabout">
              Developed and designed a professional portfolio website to showcase notable projects, experience, and affiliations. Utilized a versatile tech stack, including React.js, HTML, CSS, JavaScript, and Git for robust version control. Hosted the website securely on AWS using S3, Route 53, and CloudFront, ensuring optimal performance and achieving a 99.99% uptime.
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
        </Zoom>

        <Zoom bottom>
          <div className="footerport">
            <div className="subtitleport">Contact Me</div>

            <span className="textabout">Email: </span>
            <span className="linksport">
              <a
                className="contactlinkport"
                href="mailto:amaanchau7@gmail.com?"
              >
                amaanchau7@gmail.com
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
        </Zoom>
      </div>
    </div>
  </>
);

export default Portfolio;
