import React, { useEffect, useState } from "react";


const ShortCircuit = () => {
    const [ text, setText ] = useState('');
    const fValue = text || "hello World";
    const svalue = text && "hello World";

    return (
        <>
            <h1>{  text || "john Doe"}</h1>
            { text && <h1>hello world</h1>}
            {! text && <h1> hello world</h1>}
        </>
    );
};

export default ShortCircuit;