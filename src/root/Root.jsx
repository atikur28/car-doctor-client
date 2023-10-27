import { Outlet } from "react-router-dom";
import Footer from "../pages/SharedPages/Footer/Footer";

const Root = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;