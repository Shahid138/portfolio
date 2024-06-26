/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { GoHome } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { BiLogoInstagram } from "react-icons/bi";

const Menu = ({ menuToggle }) => {
  return (
    <div className={`menu-container ${menuToggle ? "menu-toggle" : ""}`}>
      <ul className="menu-list">
        <li className="menu-item">
          <a href="#" draggable="false">
            <GoHome color="#D93643" size={25} className="menu-icon" />
            Home
          </a>
        </li>

        <li className="menu-item">
          <a
            href="https://github.com/Shahid138"
            target="_blank"
            rel="noreferrer"
            draggable="false"
          >
            <LuGithub color="#2A9D8F" size={25} className="menu-icon" />
            Github
          </a>
        </li>
        <li className="menu-item">
          <a
            href="https://www.linkedin.com/in/shahid-saifi/"
            target="_blank"
            rel="noreferrer"
            draggable="false"
          >
            <FiLinkedin color="#0277B5" size={25} className="menu-icon" />
            LinkedIn
          </a>
        </li>
        <li className="menu-item">
          <a
            href="/portfolio/docs/Shahid_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            draggable="false"
          >
            <FaCode color="#F77F00" size={25} className="menu-icon" />
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
