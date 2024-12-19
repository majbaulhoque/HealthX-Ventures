import Appointment from "../../Component/Appointment/Appointment";
import Banner from "../../Component/Banner/Banner";
import ChooseUs from "../../Component/Choose Us/ChooseUs";
import Services from "../../Component/Services/Services";
import Staffs from "../../Component/Staff/Staffs";

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <ChooseUs />
            <Staffs />
            <Appointment />
        </div>
    );
};

export default Home;