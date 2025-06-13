import "../Styles/contact.css";
import { Link } from "react-router-dom";

function Contact() {
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

      {/* contact page content  */}
      <div className="contact-content">
        <h1>Contact</h1>

        <div className="contact-map">
         
          <iframe
            title="Lagos Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.024181216599!2d3.3774687!3d6.6093203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c3e8b7b1b1b%3A0x2d8b8b8b8b8b8b8b!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1718030000000!5m2!1sen!2sng"
            width="100%"
            height="400vh"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
         
        </div>
        {/* end of iframe  */}

        {/* begining of another div */}
        <div className="content-detail">
         <p> Contact Form</p>
        </div>

      
        <div className="contact-form">
          <form action="https://formspree.io/f/mkgbraja" method="POST">
  <input className="same" type="text" id="name" name="name" placeholder="Name" required />
  <input className="same" type="email" id="email" name="email" placeholder="Email" required /><br />
  <textarea className="same-text" id="message" name="message" rows="4" placeholder="Type your message" required></textarea>
  <button type="submit" className="email-button">Send Message</button>
</form>
        </div> 
      </div> 
    </div>
  );
}
export default Contact;
