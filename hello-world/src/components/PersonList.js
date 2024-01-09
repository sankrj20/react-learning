import React from "react";
function PersonList ({person}){    
    return(
        <h2>I am {person.name}. I live in {person.city}. I love {person.favoriteLanguage}.</h2>
    )
}
export default PersonList