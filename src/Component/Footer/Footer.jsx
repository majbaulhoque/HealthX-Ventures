import { FaFacebookF, FaTwitter, FaYoutube, FaPinterestP, FaChevronRight } from "react-icons/fa";
import "./Footer.css";
import Logo from "../../assets/Logo/Logo";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-section">
                    <div className="footer-logo-parent">
                        <Logo className="footer-image" />
                        <h2 className="footer-logo">Health</h2>
                    </div>
                    <address>
                        <p>Sahibabad, Ghaziabad, Uttar Pradesh 201005</p>
                        <p>+1-887*****78787</p>
                        <p>
                            <a href="mailto:info@demohelp.com" className="footer-link">
                                info@demohelp.com
                            </a>
                        </p>
                    </address>
                    <div className="footer-socials">
                        <a href="#" aria-label="Facebook" className="social-icon">
                            <FaFacebookF />
                        </a>
                        <a href="#" aria-label="Twitter" className="social-icon">
                            <FaTwitter />
                        </a>
                        <a href="#" aria-label="YouTube" className="social-icon">
                            <FaYoutube />
                        </a>
                        <a href="#" aria-label="Pinterest" className="social-icon">
                            <FaPinterestP />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>
                            <FaChevronRight className="li-icon" /> <a href="#" className="footer-link">About Us</a>
                        </li>
                        <li>
                            <FaChevronRight className="li-icon" /> <a href="#" className="footer-link">Our Pricing</a>
                        </li>
                        <li>
                            <FaChevronRight className="li-icon" /> <a href="#" className="footer-link">Our Gallery</a>
                        </li>
                        <li>
                            <FaChevronRight className="li-icon" /> <a href="#" className="footer-link">Appointment</a>
                        </li>
                        <li>
                            <FaChevronRight className="li-icon" /> <a href="#" className="footer-link">Privacy Policy</a>
                        </li>
                    </ul>
                </div>

                {/* Departments */}
                <div className="footer-section">
                    <h4>Department</h4>
                    <ul>
                        <li>
                            <FaChevronRight className="li-icon" /> <a href="#" className="footer-link">Orthology</a>
                        </li>
                        <li>
                            <FaChevronRight className="li-icon" /> <a href="#" className="footer-link">Neurology</a>
                        </li>
                        <li>
                            <FaChevronRight className="li-icon" /> <a href="#" className="footer-link">Dental Care</a>
                        </li>
                        <li>
                            <FaChevronRight className="li-icon" /> <a href="#" className="footer-link">Ophthalmology</a>
                        </li>
                        <li>
                            <FaChevronRight className="li-icon" /> <a href="#" className="footer-link">Cardiology</a>
                        </li>
                    </ul>
                </div>

                {/* Useful Links */}
                <div className="footer-section">
                    <h4>Useful Links</h4>
                    <ul>
                        <li>
                            <FaChevronRight className="li-icon" /> <a href="#" className="footer-link">About Us</a>
                        </li>
                        <li>
                            <FaChevronRight className="li-icon" /> <a href="#" className="footer-link">Our Blog</a>
                        </li>
                        <li>
                            <FaChevronRight className="li-icon" /> <a href="#" className="footer-link">Our Gallery</a>
                        </li>
                        <li>
                            <FaChevronRight className="li-icon" /> <a href="#" className="footer-link">Appointment</a>
                        </li>
                        <li>
                            <FaChevronRight className="li-icon" /> <a href="#" className="footer-link">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>&copy; 2024 Health.com. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
