import React, { useEffect, useState } from "react";
import { data } from "../../data";
import { Link,useParams } from "react-router-dom";

const Person = () => {
    const [name,setname] = useState('default Name');
    const {id} = useParams();
    useEffect(() =>{
        const newPerson = data.find((person) => person.id === parseInt(id));
        setname(newPerson.name);
    })
     return (
        <>
            <div>
                <h1>{name}</h1>
                <Link to="/people" className="btn">
                    Back to People
                </Link>
            </div>
        </>
    );
} 
export default Person;