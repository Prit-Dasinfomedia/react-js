import React, { useState } from "react";

const UseStateobject = () => {
    const [person, setPerson] = useState({ 
        name: "Prit", 
        age: "23", 
        message: "i am Prit patel",
    });
    // console.log(person);
    const changeMessage = () => {
        setPerson({...person, message:'hello, how are you?'});
    }
    return (
        <>
           <h2>{person.name}</h2>
           <h2>{person.age}</h2>
           <h2>{person.message}</h2>
           <button onClick={changeMessage}>Change</button>
        </>
    );
};

export default UseStateobject;