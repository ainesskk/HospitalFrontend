import { Navigate } from 'react-router-dom';
import {getLsToken} from "./api/localStorageFunctions.jsx";
import PropTypes from "prop-types";

const BlockRoute = ({ children }) => {
    const isAuthenticated = getLsToken();
    return isAuthenticated ? <Navigate to="/" /> : children;
};

export default BlockRoute;
BlockRoute.propTypes = {
    children: PropTypes.node.isRequired,
}