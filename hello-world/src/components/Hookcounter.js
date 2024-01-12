import React, { useState } from "react";
function Hookcounter(){
    const initialCount = 0;
    const [count , setCount] = useState(initialCount);
    return(
        <div>
            <span>COUNT : {count}</span>
            <button onClick={() => setCount( prevState => prevState + 1)}>Increment</button>
            <button onClick={() => setCount( prevState => prevState - 1)}>Decrement</button>
            <button onClick={() => setCount( prevState => prevState + 5)}>Increment by 5</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
        </div>
    )


}
export default Hookcounter