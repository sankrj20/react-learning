import React, { Component } from "react";
import PersonList from "./PersonList";
function ConditionRender(){
    const persons = [
        { id: 1, name: 'John', city: 'New York', favoriteLanguage: 'JavaScript' },
        { id: 2, name: 'Alice', city: 'San Francisco', favoriteLanguage: 'Python' },
        { id: 3, name: 'Bob', city: 'London', favoriteLanguage: 'Java' },
        { id: 4, name: 'Eva', city: 'Berlin', favoriteLanguage: 'C#' }
    ];
    const personList = persons.map(person => <PersonList key = {person.id} person={person}></PersonList>)
    return (
        <div>
            {personList}
        </div>
    )
}
export default ConditionRender