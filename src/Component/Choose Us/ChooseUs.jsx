import "./ChooseUs.css";
import Doctor from "/Image/Doctor-PNG-Images 1.png";
import Plus from "/Image/Plus.png";
import CommonLogo from '/Image/commonLogo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ChooseUs = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <section className="choose-us-section">
            <div className="choose-container">
                <img className="choose-us-logo"
                    src={CommonLogo}
                    alt=""
                />
                <p>Why Choose Us</p>
            </div>
            <div className="container">
                {/* Left Section: Content */}
                <div className="choose-us-content-only">
                    <h2 id="choose-us-header">We Remain Continuously Available For Your Health Services</h2>
                    <div className="choose-us-point">
                        <div className="point-number">01</div>
                        <div className="point-details">
                            <h3>Compassionate & Expert Care</h3>
                            <p>
                                Our team of dedicated healthcare professionals combines years of
                                experience with a genuine commitment to providing.
                            </p>
                        </div>
                    </div>
                    <div className="choose-us-point">
                        <div className="point-number">02</div>
                        <div className="point-details">
                            <h3>Patient-Centered Approach</h3>
                            <p>
                                Your health and well-being are our top priorities. We take the
                                time to listen to your concerns, answer your questions.
                            </p>
                        </div>
                    </div>
                    <div className="choose-us-point">
                        <div className="point-number">03</div>
                        <div className="point-details">
                            <h3>Personalized Treatment Plans</h3>
                            <p>
                                We understand that every patient is unique, and their healthcare
                                needs may vary. That{`'`}s why we create individualized treatment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Section: Image */}
                <div className="choose-us-image">
                    <div className="background-shape"></div>
                    <img src={Doctor} alt="Doctor" className="choose-doctor-image" data-aos="zoom-in" />
                    <img src={Plus} alt="Health Plus Icon" className="plus-icon" data-aos="zoom-in" />
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;