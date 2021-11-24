import React, { useEffect, useState } from "react";


const ShowHide = () => {
    const [show, setShow] = useState(false);
    

    return (
        <>
            <button className="btn" onClick={()=> setShow(!show)}>show/hide</button>
            {show && <Item />}
        </>
    );
};
const Item = () => {
    const[size, setSize] =useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize',checkSize);
        };
    }, []);
    const checkSize = () => {
        setSize(window.innerWidth);
    };
    return(
        <>
            <div style={{ marginTop: '2rem'}}>
                <h1>windows</h1>
                <h2>size: {size} PX </h2>
            </div>
        </>
    )
};

export default ShowHide;