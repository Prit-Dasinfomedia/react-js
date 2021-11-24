import React from "react";

const ErrorExample = () => {
   let title = " random title";

   const handleClik = () => {
       title = "hello People"
       console.log(title);
   }
   return(
    <React.Fragment>
        <h2>{title}</h2>
        <button type="button" className="btn" onClick={handleClik}>
            Change title
        </button>
    </React.Fragment>
   );
};

export default ErrorExample