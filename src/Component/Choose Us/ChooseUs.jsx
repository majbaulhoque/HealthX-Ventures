import "./ChooseUs.css"; // Import raw CSS
import Doctor from "../../../public/Image/Doctor-PNG-Images 1.png";
import Plus from "../../../public/Image/Plus.png";
import CommonLogo from '../../../public/Image/commonLogo.png';

const ChooseUs = () => {
    return (
        <section className="choose-us-section">
            <div className="choose-container">
                <img className="choose-us-logo" src={CommonLogo} alt="" />
                <p>Why Choose Us</p>
            </div>
            <div className="container">
                {/* Left Section: Content */}
                <div className="choose-us-content">
                    <h2>We Remain Continuously Available For Your Health Services</h2>
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
                                needs may vary. That's why we create individualized treatment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Section: Image */}
                <div className="choose-us-image">
                    <div className="background-shape"></div>
                    <img src={Doctor} alt="Doctor" className="doctor-image" />
                    <img src={Plus} alt="Health Plus Icon" className="plus-icon" />
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;
