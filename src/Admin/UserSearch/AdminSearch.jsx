import "../../Search/Searchbar.css";
import {useEffect, useState} from "react";
import {deleteUser, getUserInfoWithFio} from "../../api/userApi.jsx";
import SearchUser from "./SearchUser.jsx";
import "./AdminSearch.css"
import UserPage from "./UserPage.jsx";

export default function AdminSearch() {
    const [searchString, setSearchString] = useState("");
    const [users, setUsers] = useState([]);
    const [noUsers, setNoUsers] = useState(true);

    const handleChange = (e) => {
        setSearchString(e.target.value);
    };

    async function handleDeleteUser(id){
        const status = await deleteUser(id);
        setIsUserDelete(true);
    }

    const buttonClick = async (e) => {
        e.preventDefault();
        setNoUsers(true);
        const response = await getUserInfoWithFio(searchString);
        if (response.data !== undefined) {
            if(response.data.length !== 0){
                setNoUsers(false);
                setUsers(response.data);
            }
        } else {
            setNoUsers(true);
            setUsers([]);
        }
    };

    return (
        <>
            <form className="search-user-form">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Поиск пользователей"
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
                )
            }
        </>
    );
}
