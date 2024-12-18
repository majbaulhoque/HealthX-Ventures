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
        <div className="doctor-container">
            <div className='doctor-header'>
                <img src={CommonLogo} alt="" />
                <p className='doctor-title'>OUR DOCTORS</p>
            </div>
            <h3 className='doctor-title'>Our Special Doctors</h3>
            <p className='doctor-description'>Our team of specialists is at the forefront of medical innovation. Each specialist brings a unique blend of expertise, empathy, and experience to ensure that your health is in the best hands:</p>
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
    );
};

export default Staffs;