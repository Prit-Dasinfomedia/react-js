import React, { useEffect, useState } from "react";
const url = "https://api.github.com/user";

const UseEffectfetchdata = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async() => {
        const response = await fetch(url);
        const users = await response.json();

        console.log(users);
    }

    useEffect(()=> {
        getUsers();
    })
    return (
        <>
            <h2>github Users</h2>
            <ul className="users">
                {users.map((user)=>{
                    const [ id, login, avatar_url, html_url] = user;
                    return(
                        <li key={id}>
                            <img src={avatar_url} alt={login}></img>
                            <div>{login}Profile</div>

                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default UseEffectfetchdata;