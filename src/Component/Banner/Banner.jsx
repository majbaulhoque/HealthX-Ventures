import Logo from '/Image/Logo.png';
import Vector from '/Image/Vector.png';
import Slider from '/Image/Banner.png';
import './Banner.css';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const Banner = () => {
    return (
        <div>
            <div className='bg-banner'>
                <div className='banner-container'>
                    <div className="banner">
                        <div className="banner_content">
                            <div className="banner_header">
                                <img src={Logo} alt="Logo" className='banner_logo' />
                                <p className="banner_service-text">24/7 Emergency Service</p>
                            </div>
                            <h1 className="banner_title">Caring for <span className='health'>Health</span></h1>
                            <img src={Vector} alt="Vector Icon" className="banner_vector" />
                            <h2 className="banner_title_2">Caring for You</h2>
                            <p className="banner_description">
                                A brief statement outlining the purpose and mission of the clinic. This can include
                                the commitment to patient care, community health.
                            </p>
                            <div className="banner_buttons">
                                <button className="button-discover">Discover More</button>
                                <button className="custom-button">See All Services</button>
                            </div>
                        </div>
                        <div className="banner_slider">
                            <img src={Slider} alt="Slider" className="banner_slider-image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-bar-container">
                <div className="input-box">
                    <FaSearch className="input-icon" />
                    <input type="text" placeholder="Ex. Doctor, Hospital" className="search-input" />
                </div>
                <div className="input-box">
                    <FaSearch className="input-icon" />
                    <input type="text" placeholder="Ex. Surgeon, Cardiologist" className="search-input" />
                </div>
                <div className="input-box">
                    <FaMapMarkerAlt className="input-icon" />
                    <input type="text" placeholder="Set your location" className="search-input" />
                </div>
                <button className="search-button">
                    <FaSearch className="search-btn-icon" /> Search
                </button>
            </div>
        </div>
    );
};

export default Banner;
