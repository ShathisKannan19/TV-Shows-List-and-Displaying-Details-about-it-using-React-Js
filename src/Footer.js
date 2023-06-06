import React from "react";
import "./Footer.css"; // Import CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="developer-info">
        <p>
          Developed by <b>Shathis Kannan V</b>
        </p>
        <p>
          <i>Email:</i> vshathiskannan@gmail.com
        </p>
        <b>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/shathis-kannan-v-1b5073237/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/shan_edits_official/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </b>
      </div>
    </footer>
  );
};

export default Footer;
