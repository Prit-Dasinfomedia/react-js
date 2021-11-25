import React, { useEffect, useState } from "react";

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello world");
}

const controllInput = () => {
    return (
        <>
           <article>
               <form className="form" onSubmit={handleSubmit} >
                    <div className="form-control">
                        <label>Name:</label>
                        <input type="text" id="fname" name="fname"></input>
                    </div>
                    <div className="form-control">
                        <label>Email:</label>
                        <input type="text" id="Email" name="Email"></input>
                    </div>
                    <button type="submit"> 
                        add Person 
                    </button>
               </form>
           </article>
        </>
    )
};

export default controllInput;