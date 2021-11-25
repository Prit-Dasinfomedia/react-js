import React, { useEffect, useState } from "react";

const UseEffectCleanUp = () => {
    const [size, setSize] = useState(window.innerWidth);
    console.log(size);
    useEffect(() => {
        console.log('Hello World');
        window.addEventListener('resize', checkSize)
        return () => {
            console.log('cleanup');
            window.removeEventListener('resize', checkSize)
            
        }
    })
    const checkSize = () => {
        setSize(window.innerWidth);
    }

    return (
        <>
             <h1>window</h1>
             <h2>{size} PX </h2>
        </>
    );
};

export default UseEffectCleanUp;