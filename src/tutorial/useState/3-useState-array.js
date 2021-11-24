import React, { useState } from "react";
import { data } from "../../data";
const UseStatearray = () => {
    const [people, setPeople] = useState(data);
    const removeItem = (id) =>
    {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);  
    }
    return (
        <>
            {people.map((person) => {
                const {id, name} = person;
                return (<div key={id} >
                    <h4>{name}</h4>
                    <button className="btn" onClick={() => removeItem(id)}>Remove</button>
                </div>
                );
            })}
            <button className="btn" onClick={() => setPeople([])}>Clear</button>

        </>
    );
};

export default UseStatearray;