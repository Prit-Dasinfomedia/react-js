import React, { useEffect, useState } from "react";

const UseEffectdependacylist = () => {
    const [value, setvalue] = useState(0);


    useEffect(() => {
        console.log('call UseEffect ');
        if (value >= 1) {
            document.title = 'New Messages (' + value + ')';
        }
    },[value]);
    useEffect(() => {
        console.log('hello world');
        
    },[]);

    console.log('render Component');
    return (
        <>
            <h1>{value}</h1>
            <button className="btn" onClick={() => setvalue(value + 1)}>click </button>
        </>
    );
};

export default UseEffectdependacylist;