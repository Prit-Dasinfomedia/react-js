import React, { useEffect, useState } from "react";


const TernerOperator = () => {
    const [text, setText] = useState('');
    const [isError, setIsError] = useState(false);

    return (
        <>
            <h1>{text || "john Doe"}</h1>
            <button className="btn" onClick={() => setIsError(!isError)}>toggle error</button>
            {isError && <h1> Error....</h1>}
            {isError ?
                (
                    <div>
                        <p>There is an error....
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2>Ther is no error</h2>
                    </div>
                )}

        </>
    );
};

export default TernerOperator;