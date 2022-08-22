import React from "react";
import profpic from "../assets/profpic.jpg";
import resume from "../assets/resume.pdf";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    <ul>
      <li>
        <a href="mailto:amaanchau@tamu.edu?">Menu</a>
      </li>
      <li>
        <a href="mailto:amaanchau@tamu.edu?">Contact</a>
      </li>
    </ul>
    <h1>Howdy, Friends!</h1>
    <p>My name is Amaan Chaudhry, and I'm a student at Texas A&M University.</p>
    <p>
      Email: <a href="mailto:amaanchau@tamu.edu?">amaanchau@tamu</a>
    </p>
    <p>
      Phone: <a href="tel:2812355003">(281) 235-5003</a>
    </p>
    <img src={profpic} alt="Profile Picture" width="200" height="200" />
    <h3>Quick Links:</h3>
    <nav>
      <ul>
        <li>
          <a href="www.linkedin.com/in/amaan-chaudhry">Linkedin</a>
        </li>
        <li>
          <a href={resume}>Resume</a>
        </li>
        <li>
          <a href="https://github.com/amaanchau">Github</a>
        </li>
      </ul>
    </nav>

    <nav>
      <ul>
        <li>
          <Link to="/portfolio">View My Projects</Link>
        </li>
        <li>
          <Link to="/about">Learn More About Me</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Home;
