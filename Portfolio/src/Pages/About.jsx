import "../Styles/About.css";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { HiServer } from "react-icons/hi";
import { FaCogs } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";

function About() {
  return (
    <div className="right-container">
      <div className="navbar-container">
        <div className="navbar">
          <Link to="/about" className="navLinks">
            About
          </Link>
          <Link to="/resume" className="navLinks">
            Resume
          </Link>
          <Link to="/projects" className="navLinks">
            Projects
          </Link>
          <Link to="/contact" className="navLinks">
            Contact
          </Link>
        </div>
      </div>
      <div className="about-content">
        <h1>About Me</h1>

        <span className="about-text">
          Hi, I’m Emmanuel Sheyi, a Frontend Developer who loves building
          user-friendly and efficient applications. I enjoy working on 
          frontend , bringing ideas to life with modern tools and
          technologies.
        </span>
        <br />
        <span className="about-text">
          I'm a passionate frontend developer with a keen interest in
          creating dynamic and responsive web applications. I love turning ideas
          into reality through code and design.
        </span>
        

        <h3>What I'm doing </h3>
      </div>
      <div class="grid-container">
        <div class="box">
          <div className="frontend-logo">
            <FaReact style={{ color: "rgb(240, 190, 62)", fontSize: "30px" }} />
          </div>
          <div className="frontend-text">
            <h3>Frontend Development</h3>
            <span>
              I specialize in creating responsive and interactive user
              interfaces using React, HTML, CSS, and JavaScript.
            </span>
          </div>
        </div>
        <div class="box">
          <div className="backend-logo">
            <HiServer size={30} color="rgb(240, 190, 62)" />
          </div>
          <div className="backend-text">
            <h3>UI/UX Design</h3>
            <span>
              I focus on creating intuitive and visually appealing user interfaces by applying core design principles. I enjoy collaborating with designers and using tools like Figma to bring seamless and user-friendly experiences to life.
            </span>
          </div>
        </div>
        <div class="box">
          <div className="clouds-logo">
            <FaCogs size={40} color="rgb(240, 190, 62)" />
          </div>
          <div className="clouds-text">
            <h3>React Native</h3>
            <span>
              No hands-on experience with React Native yet. However  I know it’s a natural next step, with a solid foundation in React, I’m preparing to transition into mobile development using React Native.
            </span>
          </div>
        </div>
        <div class="box">
          <div className="mobile-logo">
            <IoPhonePortraitOutline
              style={{ color: "rgb(240, 190, 62)", fontSize: "25px" }}
            />
          </div>
          <div className="mobile-text">
            <h3>Data Visualization</h3>
            <span>
             I’m a frontend developer with a growing interest in data visualization. Although I haven’t built visualizations yet, I’m actively learning how to work with tools like Chart.js and Recharts to turn real-time data into meaningful visual experiences.
            </span>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default About;
