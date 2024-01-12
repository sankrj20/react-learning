import React, { useState } from "react";
function HookObject(){
    const [name , setName] = useState({fname : "", lname : ""});
    return (
        <div>
            <form>
                <input type="text" 
                value={name.fname}
                onChange={e => setName({...name, fname: e.target.value})}></input>
                <input type="text"
                value={name.lname}
                onChange={e => setName({...name, lname: e.target.value})}></input>
                <h2>{name.fname} {name.lname}</h2>
            </form>
        </div>
    )
       
    

}
export default HookObject;