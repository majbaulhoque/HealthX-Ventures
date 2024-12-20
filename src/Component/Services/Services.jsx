import axios from "axios";
import { useEffect, useState } from "react";
import Logo from '/Image/commonLogo.png';
import './Services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Services = () => {
    const [services, setServices] = useState([]);
    const [isError, setIsError] = useState('');

    const getServicesApi = async () => {
        try {
            const res = await axios.get('/services.json');
            setServices(res.data);
        } catch (error) {
            setIsError(error.message);
        }
    };

    useEffect(() => {
        getServicesApi();
        AOS.init({duration: 2000});
    }, []);

    return (
        <div>
            <div className="services-container">
                <div className="services-header">
                    <img src={Logo} alt="Common Logo" />
                    <p>OUR SERVICES</p>
                </div>
                <h3 className="services-list">Our Mediax specialties service</h3>
                {isError && <h2>{isError}</h2>}
                <div className="services-grid">
                    {services.map((service) => {
                        const { id, name, description, img } = service;
                        return (
                            <div key={id} className="service-card"
                            data-aos="zoom-in">
                                <img src={img} alt={name} />
                                <h3>{name}</h3>
                                <p>{description}</p>
                                <button>Read More</button>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="services-explore">
                <div className="explore-line"></div>
                <div className="explore-content">
                    You Get Our 20+ More services...
                    <a href="#" className="explore-link">EXPLORE ALL SERVICES</a>
                </div>
                <div className="explore-line"></div>
            </div>
        </div>
    );
};

export default Services;
