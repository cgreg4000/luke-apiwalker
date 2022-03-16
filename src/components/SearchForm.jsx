import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const SearchForm = () => {

    let [categorySelector, setCategorySelector] = useState("people")
    let [idInput, setIdInput] = useState(null)

    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault()
        
        if(categorySelector == "people"){
            history.push(`/people/${idInput}`)
        }
        else{
            history.push(`/planets/${idInput}`)
        }
    }

    return (
        <>
            
            <form onSubmit={submitHandler}>
                <label>Search for:</label>
                <select onChange={(e) => {setCategorySelector(e.target.value)}}>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>
                <label>ID:</label>
                <input type="number" onChange={(e) => {setIdInput(e.target.value)}}></input>
                <input type="submit" value="Search"></input>
            </form>
            
        </>
    )
}

            export default SearchForm