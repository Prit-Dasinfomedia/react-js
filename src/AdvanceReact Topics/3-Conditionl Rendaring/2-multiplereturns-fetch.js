import React, { useEffect, useState } from "react";
import {data} from "../../data"

const multiplereturnsfetch = () => {
    const [ isLoading,setIsLoading] = useState(false);
    const [ isError, setIsError] = useState(false);
    const [ user, setUser ] = useState('default user');
    useEffect(() => {
        fetch(data)
        .then((resp) => resp.json())
        .then((user) =>console.log(user))
        .catch(error => console.log(error))
    },[])
    if(isLoading)
    {
        return <h2> loading...</h2>
    }
    if(isError)
    {
        return <h2> Error...</h2>
    }

    return <h2> {user}</h2>
};

export default multiplereturnsfetch;