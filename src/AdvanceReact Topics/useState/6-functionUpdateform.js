import React, { useState } from "react";

const UseStatecounter = () => {
    // console.log(useState);
    const [value, setvalue] = useState(0);
    const hadleClick = () => {
        setvalue(0);
    };
    const ComplexIncrease = () => {
        setTimeout(()=> {
            setvalue((prevState) => {
                return prevState + 1;
            });
        }, 2000);
    };
    return (
        <>
            <section stylke={{ margin: "4rem 0" }}>
                <h1>Regular Counter</h1>
                <h1>{value}</h1>
                <button className="btn" onClick={() => setvalue(value - 1)}>Decrease</button>
                <button className="btn" onClick={hadleClick}>Reset</button>
                <button className="btn" onClick={() => setvalue(value + 1)}>Increase</button>
            </section>
            <section stylke={{ margin: "4rem 0" }}>
                <h1>More Complex Counter</h1>
                <h1>{value}</h1>
                
                <button className="btn" onClick={ComplexIncrease}>increase</button>
                
            </section>
        </>
    );

};

export default UseStatecounter;