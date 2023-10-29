import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if(loading){
        return (
            <div className="h-[50vh] flex justify-center items-center">
                <span className="loading loading-ring loading-lg"></span>
            </div>
        );
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;