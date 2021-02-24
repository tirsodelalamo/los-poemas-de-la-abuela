import React, { useState } from "react";
import './Footer.css'

import Instagram from '../../public/socialMedia/instagram.png'
import Linkedin from '../../public/socialMedia/linkedin.png'
import Email from '../../public/socialMedia/email.png'
import Github from '../../public/socialMedia/github.png'


const Footer = () => {

  // eslint-disable-next-line
  const [date, updateDate] = useState({
    date: new Date().getFullYear(),
  });
    
    return (
      <footer>
        <h1>Tirso del Álamo &copy; {date.date}</h1>
        <ul className="social-media">
          <li>
            <a
              href="mailto:tirsodelalamomartin@gmail.com"
              title="Email"
              target="blank"
            >
              <img className="icon" src={Email} alt="Email" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tirsodelalamomartin/"
              title="LinkedIn"
              target="blank"
            >
              <img className="icon" src={Linkedin} alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tirsodelalamo"
              title="Github"
              target="blank"
            >
              <img className="icon" src={Github} alt="Github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tirsodelalamo/"
              title="Instagram"
              target="blank"
            >
              <img className="icon" src={Instagram} alt="Instagram" />
            </a>
          </li>
        </ul>
      </footer>
    );
}
 
export default Footer;