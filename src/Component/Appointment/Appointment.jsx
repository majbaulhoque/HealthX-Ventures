import Doctor from '/Image/appointment.png';
import Logo from '/Image/commonLogo.png';
import "./Appointment.css";

const Appointment = () => {
    return (
        <div>
            <div className="appointment-header">
                <img src={Logo} alt="" className="appointment-logo" />
                <p className="appointment-contact">Contact Us</p>
            </div>
            <h3 className="appointment-quote-title">Get a Quote Today</h3>
            <p className="appointment-quote-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{`'`}s standard dummy text ever since the 1500s
            </p>
            <div className="appointment-section">
                <div className="appointment-container">
                    {/* Left Section: Doctor's Image */}
                    <div className="appointment-image-container">
                        <div className="appointment-background-shape"></div>
                        <img
                            src={Doctor}
                            alt="Doctor"
                            className="appointment-doctor-image"
                        />
                    </div>

                    {/* Right Section: Appointment Form */}
                    <div className="appointment-form-container">
                        <form className="appointment-form">
                            <div className="appointment-form-row">
                                <div className="appointment-form-group">
                                    <label htmlFor="first-name">First name</label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        name="first-name"
                                        placeholder="First name"
                                    />
                                </div>
                                <div className="appointment-form-group">
                                    <label htmlFor="last-name">Last name</label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        name="last-name"
                                        placeholder="Last name"
                                    />
                                </div>
                            </div>
                            <div className="appointment-form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="you@company.com"
                                />
                            </div>
                            <div className="appointment-form-group">
                                <label htmlFor="phone-number">Phone number</label>
                                <input
                                    type="tel"
                                    id="phone-number"
                                    name="phone-number"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>
                            <div className="appointment-form-group">
                                <label htmlFor="date">Select date</label>
                                <input type="date" id="date" name="date" />
                            </div>
                            <div className="appointment-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your message"
                                ></textarea>
                            </div>
                            <button type="submit" className="appointment-btn">
                                APPOINTMENT NOW
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
