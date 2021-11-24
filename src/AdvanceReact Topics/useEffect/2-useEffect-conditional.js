import React, { useEffect, useState } from "react";

const UseEffectConditional = () => {
    const [value, setvalue] = useState(0);


    useEffect(() => {
        console.log('call UseEffect ');
        if (value >= 1) {
            document.title = 'New Messages (' + value + ')';
        }
    })

    console.log('render Component');
    return (
        <>
            <h1>{value}</h1>
            <button className="btn" onClick={() => setvalue(value + 1)}>click </button>
        </>
    );
};

export default UseEffectConditional;