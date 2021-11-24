import React, { useEffect, useState } from "react";

const UseEffectbasics = () => {
    const [value, setvalue] = useState(0);
    useEffect(() => {
        console.log('call UseEffect ');
       
    })
    console.log('render Component');
    return (
        <>
            <h1>{value}</h1>
            <button className="btn" onClick={() => setvalue(value + 1)}>click </button>
        </>
    );
};

export default UseEffectbasics;