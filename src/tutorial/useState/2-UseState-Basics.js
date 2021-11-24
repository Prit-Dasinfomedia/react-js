import React,{ useState} from "react";

const UseStatebasics = () => {
    // console.log(useState);
    const [text, setText] = useState("random title");
    const hadleClick = () => {
        if(text === "random title")
        {
        setText("Hello world");
        }
        else
        {
            setText("random title");
        }
    };  
    return(

        <React.Fragment>
            <h1>{text}</h1>
            <button className="btn" onClick={hadleClick}>change title</button>
        </React.Fragment>
    );
   
};

export default UseStatebasics;