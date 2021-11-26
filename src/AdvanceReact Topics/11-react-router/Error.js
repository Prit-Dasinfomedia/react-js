import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return(
        <>
            <h2>Error Page</h2>
            <Link to="/" className="btn"> BackHome</Link>
        </>
    );
} 
export default Error;