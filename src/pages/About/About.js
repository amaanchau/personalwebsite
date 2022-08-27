import React from "react";
import { Link } from "react-router-dom";
import tamu from "../../assets/tamu.png";
import coding from "../../assets/coding.png";
import hobby from "../../assets/hobby.jpg";

import "./About.css";

const About = () => (
  <>
    <div className="body">
      <div className="navbar">
        <span className="navbarleft">
          <a className="navbaritem" href="mailto:amaanchau@tamu.edu?">
            MENU
          </a>
        </span>
        <span className="navbarright">
          <a className="navbaritem" href="mailto:amaanchau@tamu.edu?">
            CONTACT
          </a>
        </span>
      </div>
      <br />
      <div className="whole">
        <div className="description">
          <div className="Title">About Me</div>
          <hr />
          <span className="text">
            My name is Amaan Chaudhry, and I am currently a College Sophomore
            attending <span className="tamu">Texas A&M University</span>. I am
            greatly interested in
            <b> web/app development</b>, the <b>cloud</b>, and{" "}
            <b>machine learning. </b>
            Additionally I always strive to increase my knowledge in the field
            of computer science and technology as a whole. We are living in a
            world of technology, and I hope to one day create a lasting impact
            on the field. <b>Learning and leading</b> are what I do best!
          </span>
        </div>
        <p className="scroll">SCROLL</p>
        <div className="vertline"></div>
        <div className="container">
          <div className="left">
            <div className="subtitle">Education</div>
            <span className="text">
              I am a <b>Sophomore Computer Engineering</b> student at{" "}
              <b>Texas A&M University</b> with a minor in Mathematics. I
              currently have a <b>4.0 gpa</b> and in the future I plan to attend
              graduate school attain a <b>Master of Computer Science </b>
              degree. Additionally, I have graduated from Clear Falls High
              School and was ranked 11th of my class of 630 students. I am a{" "}
              <b>lifelong learner</b> and hope to continue growing both
              academically and personally.
            </span>
          </div>
          <div className="right">
            <img
              className="logo"
              src={tamu}
              alt="TAMU Picture"
              width={350}
              height={300}
            />
          </div>
        </div>
        <div className="container">
          <div className="left2">
            <img
              className="logo"
              src={coding}
              alt="Coding Picture"
              width={300}
              height={300}
            />
          </div>
          <div className="right2">
            <div className="subtitle">Coding</div>
            <span className="text">
              I am a <b>Sophomore Computer Engineering</b> student at{" "}
              <b>Texas A&M University</b> with a minor in Mathematics. I
              currently have a <b>4.0 gpa</b> and in the future I plan to attend
              graduate school attain a <b>Master of Computer Science </b>
              degree. Additionally, I have graduated from Clear Falls High
              School and was ranked 11th of my class of 630 students. I am a{" "}
              <b>lifelong learner</b> and hope to continue growing both
              academically and personally.
            </span>
          </div>
        </div>
        <div className="container">
          <div className="left">
            <div className="subtitle">Hobbies</div>
            <span className="text">
              I am a <b>Sophomore Computer Engineering</b> student at{" "}
              <b>Texas A&M University</b> with a minor in Mathematics. I
              currently have a <b>4.0 gpa</b> and in the future I plan to attend
              graduate school attain a <b>Master of Computer Science </b>
              degree. Additionally, I have graduated from Clear Falls High
              School and was ranked 11th of my class of 630 students. I am a{" "}
              <b>lifelong learner</b> and hope to continue growing both
              academically and personally.
            </span>
          </div>
          <div className="right">
            <img
              className="logo"
              src={hobby}
              alt="Hobbies Picture"
              width={380}
              height={350}
            />
          </div>
        </div>

        <div className="footer">
          <div className="subtitle">Contact Me</div>

          <span className="text">Email: </span>
          <span className="links">
            <a className="contactlink" href="mailto:amaanchau@tamu.edu?">
              amaanchau@tamu
            </a>
          </span>
          <br />
          <span className="text">Phone: </span>
          <span className="links">
            <a className="contactlink" href="tel:2812355003">
              (281) 235-5003
            </a>
          </span>
          <nav className="bottom">
            <ul>
              <li className="morelist">
                <Link className="more" to="/portfolio">
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
