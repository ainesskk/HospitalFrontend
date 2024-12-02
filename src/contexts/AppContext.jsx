import { createContext, useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { getUserRole } from "../api/userApi.jsx";
import {setLsRole} from "../api/localStorageFunctions.jsx";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [role, setRole] = useState("");
    const [isRoleSet, setIsRoleSet] = useState(false);

    useEffect(() => {
        if (isRoleSet) {
            const fetchUserRole = async () => {
                const role = await getUserRole();
                setRole(role);
                sessionStorage.setItem('role', role);
                console.log("роль в контексте ", role);
            };

            fetchUserRole();
        }
    }, [isRoleSet]);

    return <AppContext.Provider value={{ role, setRole, setIsRoleSet }}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
