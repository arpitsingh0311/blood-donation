import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Vital Drops. All rights reserved.
        </p>
        <p className="footer-powered">
          Powered by <a href="https://github.com/arpitsingh0311" target="_blank">Arpit Singh</a>
        </p>
        <div className="footer-links">
          <Link to="/privacyPolicy" className="footer-link">
            Privacy Policy
          </Link>
          <Link to="#" className="footer-link">
            Terms of Service
          </Link>
          <a
            href="https://mail.google.com/mail/?view=cm&to=arpit0316@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
