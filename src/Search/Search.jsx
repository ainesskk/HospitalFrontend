import Searchbar from "./Searchbar.jsx";
import AdminSearch from "../Admin/UserSearch/AdminSearch.jsx";
import { useEffect, useState } from "react";

export default function Search() {
    const [role, setRole] = useState("");

    useEffect(() => {
        const roleFromStorage = sessionStorage.getItem('role');
        setRole(roleFromStorage);
    }, []);

    if (role === "") {
        return <div>Loading...</div>;
    }

    return (
        <>
            {role === "Admin" ? <AdminSearch /> : <Searchbar />}
        </>
    );
}
