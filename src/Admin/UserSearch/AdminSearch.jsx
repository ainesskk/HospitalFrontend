import "../../Search/Searchbar.css";
import { useState } from "react";
import {getUserInfoWithFio} from "../../api/userApi.jsx";
import SearchUser from "./SearchUser.jsx";

export default function AdminSearch() {
    const [searchString, setSearchString] = useState("");
    const [users, setUsers] = useState([]);
    const [noUsers, setNoUsers] = useState(true);

    const handleChange = (e) => {
        setSearchString(e.target.value);
    };

    const buttonClick = async (e) => {
        e.preventDefault();
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
                    placeholder="Поиск пользователя"
                    onChange={handleChange}
                />
                <button className="search-img-container" onClick={buttonClick}>
                    <img className="search-img" src="../../src/assets/search.svg" alt="search" />
                </button>
            </form>
            {noUsers ? (
                <p className="no-results">Нет результатов</p>
            ) : (
                <div className="search-all-patients-container">
                    {users.map((user) => {
                        console.log(user.id);
                        return <SearchUser key={user.id} userData={user} />;
                    })}
                </div>
            )}
        </>
    );
}
