import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/')
    }
    return (
        <div className="error-container">
            <h1 className="error-title">404</h1>
            <p className="error-subtitle">Oops! The page you are looking for does not exist.</p>
            <button onClick={handleClick} className="error-link">Go Back Home</button>
        </div>
    );
};

export default ErrorPage;
