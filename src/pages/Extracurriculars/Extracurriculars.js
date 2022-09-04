import React from "react";
import { Link } from "react-router-dom";
import personalwebsite from "../../assets/personalwebsite.png";
import tamu from "../../assets/tamu.png";
import coding from "../../assets/coding.png";
import hobby from "../../assets/hobby.jpg";
import cfhs from "../../assets/cfhs.png";
import rocket from "../../assets/rocket.jpg";
import robotics from "../../assets/robotics.jpg";
import nhs from "../../assets/nhs.jpg";
import gcfb from "../../assets/gcfb.jfif";
import acc from "../../assets/acc.jfif";
import asap from "../../assets/asap.png";
import msa from "../../assets/msa.jpg";
import clic from "../../assets/clic.png";
import grad from "../../assets/grad.jpg";

import helen from "../../assets/helen.jpg";
import quba from "../../assets/quba.jpg";

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
              From organizations like Galveston Food Bank, Project Downtown, or
              the local library, I've always strived to participate in events
              that <b className="boldext">give back to the community</b>. Over
              time, I have found that I participate primarily in organizations I
              can connect with or have interest for. Organizations such as the
              Aggie Coding Club have allowed me to{" "}
              <b className="boldext">network, collaborate, and create</b> with
              my fellow engineering peers. Through these organizations I hope to
              share my passion for <b className="boldext">community service</b>{" "}
              and the field of <b className="boldext">computer science</b> with
              those around me.
            </span>
          </div>
        </div>
        <p className="scrollext">SCROLL</p>
        <div className="vertlineext"></div>

        <div className="container">
          <div className="leftabout">
            <div className="subtitleext">Aggie Coding Club</div>
            <span className="textext">
              <b className="boldext">Sep 2021 - Present</b>
              <br />
              - Participated in a coding project to build a video game in python
              <br />
              - Participated in a project called VisionScan that taught the
              basics of OpenCV (computer vision software)
              <br /> - Attended workshops to learn the characteristics of the
              computer science industry
            </span>
            <nav className="bottomport">
              <ul className="moreul2">
                <li className="morelist">
                  <a
                    className="moreext2"
                    href="https://aggiecodingclub.com/"
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
              src={acc}
              alt="Aggie Coding Club logo"
              width={350}
              height={300}
            />
          </div>
        </div>
        <div className="container">
          <div className="left2about">
            <img
              className="logoext"
              src={msa}
              alt="Tamu muslim student assosiation group picture"
              width={300}
              height={300}
            />
          </div>
          <div className="right2about">
            <div className="subtitleext">TAMU Muslim Student Association</div>
            <span className="textext">
              <b className="boldext">Aug 2021 - Present</b>
              <br />- Volunteer at the Islamic Community of Bryan College
              Station and participate in Project Downtown (provide essential
              services to the homeless and underserved population) <br />-
              Present Islam to Muslims and non-Muslims and promote good
              relations and understanding between them <br />- Conduct
              religious, social, cultural, and other activities in the best
              traditions of Islam
            </span>
            <nav className="bottomport">
              <ul className="moreul2">
                <li className="morelist">
                  <a
                    className="moreext2"
                    href="https://www.tamumsa.org/"
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
            <div className="subtitleext">
              Aggies Serving the Aging Population
            </div>
            <span className="textext">
              <b className="boldext">Feb 2022 - Present</b>
              <br />
              As a volunteer of Aggies Serving the Aging Population, I've
              supported and served older adults in the Brazos Valley. I have
              also provided awareness of resources to promote healthy aging and
              facilitated social engagement among older adults
            </span>
            <nav className="bottomport">
              <ul className="moreul2">
                <li className="morelist">
                  <a
                    className="moreext2"
                    href="https://maroonlink.tamu.edu/organization/asap"
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
              src={asap}
              alt="Aggie serving aging population logo"
              width={350}
              height={320}
            />
          </div>
        </div>
        <div className="container">
          <div className="left2about">
            <img
              className="logoext"
              src={clic}
              alt="Clear lake islamic center logo"
              width={250}
              height={250}
            />
          </div>
          <div className="right2about">
            <div className="subtitleext">Clear Lake Islamic Center</div>
            <span className="textext">
              <b className="boldext">Youth Director | Jun 2019 - Aug 2021 </b>
              <br />
              As Youth Director, I've helped design the curriculum, given
              speeches to the students, assisted in youth programs, and
              organized special events.
            </span>
            <nav className="bottomport">
              <ul className="moreul2">
                <li className="morelist">
                  <a
                    className="moreext2"
                    href="https://www.themasjid.org/"
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
            <div className="subtitleext">
              Clear Falls Highschool Extracurriculars
            </div>
            <span className="textext">
              <b className="boldext">
                //Robotics Club | Vice President | Aug 2019 - Jun 2021
              </b>{" "}
              <br />
              - Placed 1st in a district robotics competition and competed in a
              state competition <br />
              - Volunteered at Hyde Elementary School and taught students to
              program and build robots <br />
              - Responsible for maintaining robots
              <br />
              <br />
              <b className="boldext">
                //Rockets Club | President | Aug 2020 - Jun 2021
              </b>{" "}
              <br />
              - Participated in the Team American Rocketry Challenge and
              qualified for nationals in Washington DC <br /> - Brought in Nasa
              engineers to share their experiences and give advice to students{" "}
              <br /> - Volunteered at a nearby middle school to teach students
              the basics of RockSim (rocket simulation software) and the process
              of prototyping model rockets
              <br />
              <br />
              <b className="boldext">
                //Computer Science Club | Aug 2019 - Jun 2021
              </b>
              <br />
              Learned basic coding principles via python and java and created
              small projects using python such as blackjack, hangman, text-based
              games, etc.
              <br />
              <br />
              <b className="boldext">
                //Academic Decathlon | Aug 2020 - Jun 2021
              </b>
              <br />
              - One of three members selected for the Honors Academic Decathlon
              team. <br />
              - Placed 7th overall among honor students in district competition
              and advanced to state. <br />
              - Attempted an activity outside my comfort zone and ended up
              excelling in it.
              <br />
              <br />
              <b className="boldext">//Honor Societies | Aug 2019 - Jun 2021</b>
              <br />
              -Member of National Honor Society, National Technical Honor
              Society, National Math Honor Society, and Science National Honor
              Society at Clear Falls Highschool.
              <br /> -Lead projects for each honor society such as Action for
              Apes (electronic recycling competition), teacher appreciation
              week, food bank collection, etc.
              <br /> -Completed volunteering and tutoring hours for each
              organization.
              <br /> -Maintained requirements to remain eligible for each honor
              society.
              <br />
              <br />
              <b className="boldext">//Academic Tutor | Aug 2018 - May 2021</b>
              <br />
              As an academic tutor, I've supported students struggling in
              calculus 1, digital electronics, and computer science by preparing
              practice tests that simulated the actual testing environment and
              providing useful tips and strategies on how to approach studying.
            </span>
            <nav className="bottomport">
              <ul className="moreul2">
                <li className="morelist">
                  <a
                    className="moreext2"
                    href="https://clearfalls.ccisd.net/"
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
              src={grad}
              alt="Graduation Picture"
              width={380}
              height={350}
            />{" "}
            <br />
            <img
              className="logoext"
              src={rocket}
              alt="Group Rocket Club Picture"
              width={380}
              height={350}
            />{" "}
            <br />
            <img
              className="logoext"
              src={robotics}
              alt="Picture of Robotics Robot"
              width={380}
              height={350}
            />{" "}
            <br />
            <img
              className="logoext"
              src={nhs}
              alt="Group NHS photo"
              width={380}
              height={350}
            />
            <br />
            <img
              className="logoext"
              src={cfhs}
              alt="Clear Falls Logo"
              width={380}
              height={350}
            />
          </div>
        </div>
        <div className="container">
          <div className="left2about">
            <img
              className="logoext"
              src={gcfb}
              alt="Galveston Food Bank Logo"
              width={250}
              height={250}
            />
          </div>
          <div className="right2about">
            <div className="subtitleext">Galveston County Food Bank</div>

            <span className="textext">
              <b className="boldext">Jun 2017 - Aug 2021 </b>
              <br />
              As a volunteer, I've helped to sort, process, and pack food every
              summer for the underserved populations of Galveston County.
            </span>
            <nav className="bottomport">
              <ul className="moreul2">
                <li className="morelist">
                  <a
                    className="moreext2"
                    href="https://www.galvestoncountyfoodbank.org/"
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
            <div className="subtitleext">Helen Hall Library</div>
            <span className="textext">
              <b className="boldext">May 2017 - Aug 2019 </b>
              <br />
              As a volunteer, I've helped organize shelves and assisted patrons
            </span>
            <nav className="bottomport">
              <ul className="moreul2">
                <li className="morelist">
                  <a
                    className="moreext2"
                    href="https://www.leaguecitytx.gov/3146/Helen-Hall-Library"
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
              src={helen}
              alt="Helen Hall Library"
              width={275}
              height={225}
            />
          </div>
        </div>
        <div className="container">
          <div className="left2about">
            <img
              className="logoext"
              src={quba}
              alt="Quba Academy Logo"
              width={300}
              height={300}
            />
          </div>
          <div className="right2about">
            <div className="subtitleext">Quba Academy</div>
            <span className="textext">
              <b className="boldext">Aug 2015 - Aug 2018 </b>
              <br />
              As a volunteer, I've assisted instructors in teaching students to
              learn and read Arabic. Additionally I completed my memorization of
              the Quran at this school.
            </span>
            <nav className="bottomport">
              <ul className="moreul2">
                <li className="morelist">
                  <a
                    className="moreext2"
                    href="https://qubahouston.org/"
                    target={"_blank"}
                  >
                    Website
                  </a>
                </li>
              </ul>
            </nav>
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
