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
            
            <form className="form-group" onSubmit={submitHandler}>
                <label className="mb-2" >Search for:</label>
                <select className="form-control mb-3" onChange={(e) => {setCategorySelector(e.target.value)}}>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>
                <label className="mb-2">ID:</label>
                <input className="form-control mb-4" type="number" onChange={(e) => {setIdInput(e.target.value)}}></input>
                <input className="btn btn-dark mb-5" type="submit" value="Search"></input>
            </form>
            
        </>
    )
}

            export default SearchForm