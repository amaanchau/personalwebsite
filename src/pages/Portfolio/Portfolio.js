import React from "react";
import { Link } from "react-router-dom";
import personalwebsite from "../../assets/personalwebsite.png";
import stock from "../../assets/stock.png";

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
              This year I have plans to create several projects through
              hackathons, the aggie coding club and at home. My interests are
              primarily on{" "}
              <b className="boldext">
                front-end web development, app development, the cloud, and
                machine learning
              </b>
              . My primary languages and frameworks are{" "}
              <b className="boldext">
                {" "}
                HTML/CSS/JS, Python, React, Java, and C++.{" "}
              </b>
              I am also familiar with git/github, microsoft office, cad, and the
              cloud as I hold an{" "}
              <a
                className="ccp"
                href="https://www.credly.com/badges/c837d3fa-c93b-4375-b34f-3fe623268a8a/linked_in_profile"
                target="_blank"
              >
                {" "}
                AWS Certified Cloud Practitioner
              </a>{" "}
              certification.
            </span>
          </div>
        </div>
        <p className="scrollport">SCROLL</p>
        <div className="vertlineport"></div>

        <Zoom bottom>
          <div className="container">
            <div className="leftabout">
              <div className="subtitleport">Stock Predictor Web App</div>
              <span className="textabout">
                ➡️ Webscraped stock data from yahoo finance and
                processed/filtered data to contain only what I needed
                <br />
                ➡️ Utilized a Long Short Term Memory Network (LSTM) for building
                a model to predict the stock prices of any input stock
                <br /> ➡️ Created graphs and visualized data using matplotlib{" "}
                <br /> ➡️ Created an interactive python streamlit web
                application which I used to display my model and findings <br />{" "}
                ➡️ Deployed stream lit application to the internet using AWS
                EC2, S3, and Route53
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
                ➡️ Created and Hosted a personal website containing information
                about my projects, experience, and organizations <br />
                ➡️ Developed website using React.js, HTML, CSS, JavaScript, and
                Git
                <br /> ➡️ Hosted website with registered domain name using AWS
                EC2 and Route 53
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
        <Zoom bottom>
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
        </Zoom>
      </div>
    </div>
  </>
);

export default Portfolio;
