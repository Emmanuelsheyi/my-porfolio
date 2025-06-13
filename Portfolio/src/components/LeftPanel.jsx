// import profileImage from "../assets/sheyibosh.jpg";
// import { MdOutlineEmail } from "react-icons/md";
// import { IoIosPhonePortrait } from "react-icons/io";
// import { IoLocationOutline } from "react-icons/io5";
// import { FaLinkedin } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa";
// import { IoLogoGithub } from "react-icons/io";

// function LeftPanel() {
//   return (
//     <div className="left-container">
//       <div className="profile-container">
//         <div className="profile-image">
//           <img className="first-image" src={profileImage} alt="" width={130} height={150} />
//         </div>
//         <h5 className="profile-name">Emmanuel Sheyi</h5>
//         <p className="profile-status">Frontend Developer</p>
//         <hr />
//       </div>
//       <div className="contact-info">
//         <div className="contact">
//           <div className="email-icon">
//             <MdOutlineEmail />
//           </div>
//           <div className="email-text">
//             <h4>EMAIL</h4>
//             <article>
//               <a
//                 href="mailto:esheyi8484@gmail.com"
//                 style={{ color: "inherit", textDecoration: "none" }}
//               >
//                 esheyi8484@gmail.com
//               </a>
//             </article>
//           </div>
//         </div>
//         <div className="contact">
//           <div className="phone-icon">
//             <IoIosPhonePortrait />
//           </div>
//           {/* ...existing code... */}
//           <div className="phone-text">
//             <h4>PHONE</h4>
//             <article>
//               <a
//                 href="https://wa.me/2348166580108"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ color: "inherit", textDecoration: "none" }}
//               >
//                 +234 816 658 0108
//               </a>
//             </article>
//           </div>
//           {/* ...existing code... */}
//         </div>
//         <div className="contact">
//           <div className="location-icon">
//             <IoLocationOutline />
//           </div>
//           <div className="location-text">
//             <h4>LOCATION</h4>
//             <article>Lagos, Nigeria</article>
//           </div>
//         </div>
//         <div className="social-icons">
//           <div className="linkedin-icons">
//             <a
//               href="https://www.linkedin.com/in/ukanah-emmanuel-686349302/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaLinkedin className="profile-icon" />
//             </a>
//             <a
//               href="https://x.com/Esheyi1"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaTwitter className="profile-icon" />
//             </a>
//             <a
//               href="https://github.com/Emmanuelsheyi"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <IoLogoGithub className="profile-icon" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LeftPanel;


import React, { useState } from "react";
import profileImage from "../assets/sheyibosh.jpg";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

function LeftPanel() {
  const [open, setOpen] = useState(false);

  return (
    <div className="left-container">
      {/* Dropdown toggle for mobile */}
      <div className="mobile-dropdown-toggle" onClick={() => setOpen(!open)}>
        <span className="profile-menu">{open ? "▲" : "▼"} Profile Menu</span>
      </div>

      {/* Dropdown content for mobile */}
      <div className={`mobile-dropdown-content${open ? " open" : ""}`}>
        <div className="profile-container">
          <div className="profile-image">
            <img className="first-image" src={profileImage} alt="" width={130} height={150} />
          </div>
          <h5 className="profile-name">Emmanuel Sheyi</h5>
          <p className="profile-status">Frontend Developer</p>
          <hr />
        </div>
        <div className="contact-info">
          <div className="contact">
            <div className="email-icon">
              <MdOutlineEmail />
            </div>
            <div className="email-text">
              <h4>EMAIL</h4>
              <article>
                <a
                  href="mailto:esheyi8484@gmail.com"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  esheyi8484@gmail.com
                </a>
              </article>
            </div>
          </div>
          <div className="contact">
            <div className="phone-icon">
              <IoIosPhonePortrait />
            </div>
            <div className="phone-text">
              <h4>PHONE</h4>
              <article>
                <a
                  href="https://wa.me/2348166580108"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  +234 816 658 0108
                </a>
              </article>
            </div>
          </div>
          <div className="contact">
            <div className="location-icon">
              <IoLocationOutline />
            </div>
            <div className="location-text">
              <h4>LOCATION</h4>
              <article>Lagos, Nigeria</article>
            </div>
          </div>
          <div className="social-icons">
            <div className="linkedin-icons">
              <a
                href="https://www.linkedin.com/in/ukanah-emmanuel-686349302/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="profile-icon" />
              </a>
              <a
                href="https://x.com/Esheyi1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="profile-icon" />
              </a>
              <a
                href="https://github.com/Emmanuelsheyi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoGithub className="profile-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop profile content (always visible on desktop) */}
      <div className="desktop-profile-content">
        <div className="profile-container">
          <div className="profile-image">
            <img className="first-image" src={profileImage} alt="" width={130} height={150} />
          </div>
          <h5 className="profile-name">Emmanuel Sheyi</h5>
          <p className="profile-status">Frontend Developer</p>
          <hr />
        </div>
        <div className="contact-info">
          <div className="contact">
            <div className="email-icon">
              <MdOutlineEmail />
            </div>
            <div className="email-text">
              <h4>EMAIL</h4>
              <article>
                <a
                  href="mailto:esheyi8484@gmail.com"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  esheyi8484@gmail.com
                </a>
              </article>
            </div>
          </div>
          <div className="contact">
            <div className="phone-icon">
              <IoIosPhonePortrait />
            </div>
            <div className="phone-text">
              <h4>PHONE</h4>
              <article>
                <a
                  href="https://wa.me/2348166580108"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  +234 816 658 0108
                </a>
              </article>
            </div>
          </div>
          <div className="contact">
            <div className="location-icon">
              <IoLocationOutline />
            </div>
            <div className="location-text">
              <h4>LOCATION</h4>
              <article>Lagos, Nigeria</article>
            </div>
          </div>
          <div className="social-icons">
            <div className="linkedin-icons">
              <a
                href="https://www.linkedin.com/in/ukanah-emmanuel-686349302/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="profile-icon" />
              </a>
              <a
                href="https://x.com/Esheyi1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="profile-icon" />
              </a>
              <a
                href="https://github.com/Emmanuelsheyi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoGithub className="profile-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;