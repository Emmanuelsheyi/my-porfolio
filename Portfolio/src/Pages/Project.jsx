import "../Styles/project.css";
import { Link } from "react-router-dom";
import curamapPic from "../assets/curamap.jpg";
import zenacePic from "../assets/zenace properties.jpg";
import cashPic from "../assets/cashcash.jpg";
import colorPic from "../assets/colormix.jpg";
import bluePic from "../assets/blue.jpg";
import swiftPic from "../assets/swiftcare.jpg";
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
    <p><p className="topics">Curamap project: (Still in progress)</p><br /> 
    Curamap is a lifesaving solution built for moments when getting essential medication feels impossible. It’s a smart, user-friendly web platform designed to help people—especially those who are sick or in pain—find the drugs they need without the stress of moving from pharmacy to pharmacy. <br /> <br />

Imagine feeling unwell and still having to search around town, only to be told a medicine isn’t available. Curamap solves this by letting users simply register on the platform, search for any drug they need, and instantly see which nearby pharmacy has it in stock. Even better, Curamap offers the option for doorstep delivery—so you can focus on getting better, while we take care of the rest.

With Curamap, healthcare is just a few clicks away. </p>
  </div>
  <div className="project-item">
    <a href="https://original-zenace-a18l.vercel.app/" target="_blank" rel="noopener noreferrer">
      <img src={zenacePic} alt="Project 2" width="300px"/>
    </a>
    <p><p className="topics">Zenace Properties:</p>  <br />
  Zenance Properties is a modern real estate website that makes property hunting simple and stress-free. Whether you're looking to buy a new home, invest in land, or explore available listings, Zenance lets you do it all from the comfort of your phone or laptop. <br />

1. Browse verified properties online <br />
2. Get detailed info, prices, and images <br />
3. Buy or inquire directly through the platform <br />
4. No agents, no pressure — just real options <br />

Zenance brings real estate closer to you — fast, safe, and smart.

 </p>
  </div>
  <div className="project-item">
    <a href="https://swift-care-web-app.vercel.app/" target="_blank" rel="noopener noreferrer">
      <img src={swiftPic} alt="Project 7" width="300px"/>
    </a>
    <p><p className="topics">Swiftcare: (Still in progress)</p> <br /><br />
    SwiftCare is a modern web application that delivers immediate access to quality medical care and professional health consultations. <br /> Designed for convenience and speed, it allows users to connect with certified doctors in real-time, receive accurate medical advice through chat or video calls, and access prescriptions or care plans—all from the comfort of their home. <br /> By removing long waits and physical barriers, SwiftCare will be transforming how people experience healthcare, making it faster, smarter, and more accessible than ever before. </p>
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
