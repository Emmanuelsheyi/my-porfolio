import "../Styles/resume.css";
import { Link } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";
import { LiaUniversitySolid } from "react-icons/lia";

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
      {/* main content */}
      <div className="resume-content">
        <h1>Resume</h1>
        {/* education */}
        <div className="image-text">
          <div className="book-image">
            <IoBookOutline />
          </div>
          <div>
            <h2>Education</h2>
          </div>
        </div>
        {/* education details*/}
        <div className="education-university">
          <div className="university-image">
            <LiaUniversitySolid />
          </div>
          <div className="university-text">
            <p>AltSchool Africa</p>
            <p>2024 - 2025</p>
            <p>Diploma of Technology</p>
          </div>
        </div>
        {/* experience */}
        <div className="image-text">
          <div className="book-image">
            {" "}
            <IoBookOutline />
          </div>
          <div>
            <h2>Experience</h2>
          </div>
        </div>
        {/* experience-details */}
        <div className="experience-details">
          <div className="university-image">
            {" "}
            <LiaUniversitySolid />
          </div>
          <div className="experience-text">
            <p>Frontend Developer Intern</p>
            <p>2024 - Present</p>
            <p>
              Working on various projects,
              <br /> enhancing my skills in <br />
              React and web development.
            </p>
          </div>
        </div>

        {/* my skill */}
        <div className="my-skill">
          <h2>My Skills</h2>
          <div className="skill-container">
            <div className="skill-language">
              <span className="languages">Programming Languages</span>
              <div className="language-list">
                <div className="html">html</div>
                <div className="css">css</div>
                <div className="javascript">javascript</div>
              </div>
            </div>
            {/* frontend skills */}
            <div className="skill-frontend">
              <span className="frontend">Frameworks $ Libraries</span>
              <div className="frontend-list">
                <div className="react">React</div>
                <div className="bootstrap">Bootsrap</div>
                <div className="tailwind">Tailwind CSS</div>
                <div className="vuejs">Vue.js</div>
              </div>
            </div>
            {/* frontend skill ends */}

            {/* tools and technologies */}
            <div className="skill-tools">
              <span className="tools">Tools & Platforms</span>
              <div className="tools-list">
                <div className="git">Git</div>
                <div className="github">GitHub</div>
                <div className="npm">NPM</div>
                <div className="vscode">VSCODE</div>
              </div>
            </div>
            {/* toos ends */}

            {/* others */}
            <div className="others">
              <span className="others-text">Others</span>
              <div className="others-list">
                <div className="problem-solving">Problem Solving</div>
                <div className="teamwork">Teamwork</div>
                <div className="communication">Communication</div>
                <div className="adaptability">Adaptability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* resume-content div stop */}
    </div>
  );
}

export default About;
