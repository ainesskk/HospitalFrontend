import "../../Search/Searchbar.css";
import { useEffect, useState } from "react";
import { getUserInfoWithFio } from "../../api/userApi.jsx";
import SearchUser from "./SearchUser.jsx";
import "./AdminSearch.css";

export default function AdminSearch() {
    // Считывание сохраненного состояния из sessionStorage
    const [searchString, setSearchString] = useState(() => sessionStorage.getItem("searchString") || "");
    const [users, setUsers] = useState([]);
    const [noUsers, setNoUsers] = useState(false);

    useEffect(() => {
        sessionStorage.setItem("searchString", searchString);
        userSearch();
    }, [users]);

    const handleChange = (e) => {
        setSearchString(e.target.value);
    };

    const buttonClick = async (e) => {
        e.preventDefault();
        setNoUsers(true);
        userSearch();
    };

    async function userSearch(){
        const response = await getUserInfoWithFio(searchString);
        if (response.data !== undefined) {
            if (response.data.length !== 0) {
                setNoUsers(false);
                setUsers(response.data);
            } else {
                setNoUsers(true);
                setUsers([]);
            }
        } else {
            setNoUsers(true);
            setUsers([]);
        }
    }

    return (
        <>
            <form className="search-user-form">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Поиск пользователей"
                    value={searchString}
                    onChange={handleChange}
                />
                <button className="search-img-container" onClick={buttonClick}>
                    <img className="search-img" src="../../src/assets/search.svg" alt="search" />
                </button>
            </form>
            {noUsers ? (
                <p className="no-results">Нет результатов</p>
            ) : (
                <div className="search-all-users-container">
                    {users.map((user) => (
                        <SearchUser key={user.id} userData={user} />
                    ))}
                </div>
            )}
        </>
    );
}
