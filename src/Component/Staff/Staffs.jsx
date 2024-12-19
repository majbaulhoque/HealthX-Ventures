import { useEffect, useState } from 'react';
import './Staffs.css';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import CommonLogo from '../../../public/Image/commonLogo.png'

const Staffs = () => {
    const [doctors, setDoctors] = useState([]);
    const [isError, setIsError] = useState('');

    const getDoctorsApi = async () => {
        try {
            const res = await axios.get('/doctors.json');
            setDoctors(res.data);
        } catch (error) {
            setIsError(error.message);
        }
    };

    useEffect(() => {
        getDoctorsApi();
    }, []);

    return (
        <div>
            <div className='doctor-header'>
                <img className='doctors-logo' src={CommonLogo} alt="" />
                <p className='doctors-title'>OUR DOCTORS</p>
            </div>
            <h3 className='doctor-title'>Our Special Doctors</h3>
            <p className='doctor-description'>Our team of specialists is at the forefront of medical innovation. Each specialist brings a unique blend of expertise, empathy, and experience to ensure that your health is in the best hands:</p>
            <div className="doctor-container">

                {isError !== '' && <h2>{isError}</h2>}
                {doctors?.map((doctor) => {
                    const { id, name, specialty, rating, reviews, patients, hospital, image } = doctor || {};
                    return (
                        <div key={id} className="doctor-card">
                            <img src={image} alt={name} className="doctor-image" />
                            <h2 className="doctor-name">{name}</h2>
                            <div className="doctor-details">
                                <p className="doctor-specialty">{specialty}</p>
                                <div className="doctor-rating">
                                    <FaStar className="star-icon" color="#f5c518" />
                                    <span>
                                        {rating} ({reviews})
                                    </span>
                                </div>
                            </div>
                            <p className="doctor-patients">
                                <strong>{patients} Patients</strong>
                            </p>
                            <p className="doctor-hospital">{hospital}</p>
                        </div>

                    );
                })}
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

export default Staffs;