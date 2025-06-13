import "../Styles/About.css";
import { Link } from "react-router-dom";
import "../styles/Project.css";
import curamapPic from "../assets/curamap.jpg";
import zenacePic from "../assets/zenace properties.jpg";
import cashPic from "../assets/cashcash.jpg";
import colorPic from "../assets/colormix.jpg";
import bluePic from "../assets/blue.jpg";
function Project() {
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
       {/* project content */}
    
       <div className="project-content"> 
         <h1>Project</h1>

{/* navlinks  */}
<nav>
<p className="secondlink active">All Projects</p>
</nav>

{/* Project grid */}
<div className="projects-grid">
  <div className="project-item">
    <a href="https://codes-tau.vercel.app/" target="_blank" rel="noopener noreferrer">
      <img src={curamapPic} alt="Project 1"  width="300px"/>
    </a>
    <p>curamap project: i used react in building this project ,so as to get strongly rooted in react.</p>
  </div>
  <div className="project-item">
    <a href="https://github.com/Emmanuelsheyi/real-zanace-properties" target="_blank" rel="noopener noreferrer">
      <img src={zenacePic} alt="Project 2" width="300px"/>
    </a>
    <p>Zenace Properties</p>
  </div>
  <div className="project-item">
    <a href="https://duubemmm.github.io/My-WebPage-Project/" target="_blank" rel="noopener noreferrer">
      <img src={cashPic} alt="Project 3" width="300px"/>
    </a>
    <p>This is a WebPage project to solidify my skills and knowledge on HTML and CSS!</p>
  </div>
  <div className="project-item">
    <a href="https://duubemmm.github.io/My-WebPage-Project/project6.html" target="_blank" rel="noopener noreferrer">
      <img src={colorPic} alt="Project 4"  width="300px"/>
    </a>
    <p>Also on this project ,i used just pure html and css ,so as to get stronger on  them.</p>
  </div>
  <div className="project-item">
    <a href="https://duubemmm.github.io/My-WebPage-Project/project5.html" target="_blank" rel="noopener noreferrer">
      <img src={bluePic} alt="Project 5" width="300px"/>
    </a>
    <p>just a form page </p>
  </div>
  <div className="project-item">
    <a href="https://github.com/Emmanuelsheyi/Codes" target="_blank" rel="noopener noreferrer">
      <img src={curamapPic} alt="Project 6" width="300px"/>
    </a>
    <p>Project on github</p>
  </div>
</div>
       </div>




      </div>
    
  );
}

export default Project;
