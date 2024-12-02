import { Navigate } from 'react-router-dom';
import {getLsToken} from "./api/localStorageFunctions.jsx";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
    const isAuthenticated = getLsToken();
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}