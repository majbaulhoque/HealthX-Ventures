import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo/Logo";
import './Navbar.css';
import { CiSearch, CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-container">
                <div className="logo-container">
                    <Link to="/">
                        <Logo />
                    </Link>
                    <h2 className="logo-title">Health</h2>
                </div>

                <div className="navigation-container">
                    <ul className="navigation-menu">
                        <li className="menu-item">
                            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
                                Find Doctors
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/hospitals" className={({ isActive }) => (isActive ? "active-link" : "")}>
                                Hospitals
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/about-us" className={({ isActive }) => (isActive ? "active-link" : "")}>
                                About Us
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/services" className={({ isActive }) => (isActive ? "active-link" : "")}>
                                Services
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="additional-section">
                    <CiSearch className="nav-icon" />
                    <CiShoppingCart className="nav-icon" />
                    <button className="custom-button">Appointment Now</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
