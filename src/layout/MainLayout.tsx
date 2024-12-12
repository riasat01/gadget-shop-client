import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <section>
            <Navbar />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </section>
    );
};

export default MainLayout;