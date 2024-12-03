import { createContext, useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { getUserRole } from "../api/userApi.jsx";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [role, setRole] = useState(() => sessionStorage.getItem('role') || "");
    const [isRoleSet, setIsRoleSet] = useState(false);
    const [isDoctor, setIsDoctor] = useState(() => {
        const savedIsDoctor = sessionStorage.getItem('isDoctor');
        return savedIsDoctor === 'true';
    });

    useEffect(() => {
        const fetchUserRole = async () => {
            const role = await getUserRole();
            setRole(role);
            sessionStorage.setItem('role', role);
            if (role === "Doctor") {
                setIsDoctor(true);
                sessionStorage.setItem('isDoctor', 'true');
            } else {
                setIsDoctor(false);
                sessionStorage.setItem('isDoctor', 'false');
            }
        };

        if (isRoleSet) {
            fetchUserRole();
        }
    }, [isRoleSet]);

    useEffect(() => {
        sessionStorage.setItem('isDoctor', isDoctor);
    }, [isDoctor]);

    return (
        <AppContext.Provider value={{ role, setRole, setIsRoleSet, isDoctor, setIsDoctor }}>
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
