import React, { useEffect, useState } from "react";

const multiplererurns = () => {
    const [ loading,setLoading] = useState();

    if(loading)
    {
        return <h2> loading...</h2>
    }
    return <h2> Multiple Returns</h2>
};

export default multiplererurns;