import React, { useEffect, useState } from "react";

const ControllInput = () => {
    
    const [fname , setFName] = useState('');
    const [email , setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fname, email);
    }
    return (
        <>
           <article>
               <form className="form" onSubmit={handleSubmit} >
                    <div className="form-control">
                        <label>Name:</label>
                        <input type="text" id="fname" name="fname" value={fname}
                            onChange={(e) => setFName(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label>Email:</label>
                        <input type="text" id="Email" name="Email" value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit"> 
                        add Person 
                    </button>
               </form>
           </article>
        </>
    )
};

export default ControllInput;