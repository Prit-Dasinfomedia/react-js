import React, { useEffect, useState, useRef } from "react";

const UseRef = () => {
    const refContainer = useRef(null); 
    const divContainer = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value)
        console.log(divContainer.current);
    }
    useEffect(() => {
        console.log(refContainer.current)
        refContainer.current.focus();
    })
    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" ref={refContainer} />
                <button type="submit">Submit</button>
            </form>
            <div ref={divContainer}>hello world</div>
        </>
    )
};

export default UseRef;