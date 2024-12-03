import "../../Search/Searchbar.css";
import { useEffect, useState } from "react";
import { getUserInfoWithFio } from "../../api/userApi.jsx";
import SearchUser from "./SearchUser.jsx";
import "./AdminSearch.css";
import {useNavigate} from "react-router-dom";

export default function AdminSearch() {
    const navigate = useNavigate();
    const [searchString, setSearchString] = useState(() => sessionStorage.getItem("searchString") || "");
    const [users, setUsers] = useState([]);
    const [noUsers, setNoUsers] = useState(false);

    useEffect(() => {
        sessionStorage.setItem("searchString", searchString);
        if (searchString !== "") {
            userSearch();
        } else {
            setNoUsers(true);
            setUsers([]);
        }
    }, [searchString]);

    const handleChange = (e) => {
        setSearchString(e.target.value);
    };

    const buttonClick = async (e) => {
        e.preventDefault();
        userSearch();
    };

    async function userSearch() {
        if (searchString === "") {
            setNoUsers(true);
            setUsers([]);
            return;
        }

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

    const handlerAddUser = () => {
        navigate('/adduser')
    }

    return (
        <>
            <form className="search-user-form" onSubmit={buttonClick}>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Поиск пользователей"
                    value={searchString}
                    onChange={handleChange}
                />
                <button className="search-img-container" type="submit">
                    <img className="search-img" src="../../src/assets/search.svg" alt="search"/>
                </button>
                <div className="add-user-container">
                    <button className="add-user" onClick={handlerAddUser}>Добавить пользователя</button>
                </div>
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
