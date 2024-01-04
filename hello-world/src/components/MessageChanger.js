import React from "react";
import { useState } from "react";

const MessageChanger = () => {
    const [message , setMessage] = useState("Black");
    function changeMessage() {        
        setMessage("White")        
    }
    return(
        <div>
            <h1>{message}</h1>
            <button onClick= {changeMessage}>Switch colours</button>
        </div>
    )
}
export default MessageChanger