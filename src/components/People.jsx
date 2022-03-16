import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const People = () => {

    const {id} = useParams()

    let [starWarsResponse, setStarWarsResponse] = useState([])

    let [isError, setIsError] = useState(false)

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                setStarWarsResponse(response.data)
                console.log(response.data)
            })
            .catch(err => {
                setIsError(true)
                console.log(err)
            })
            setIsError(false)
            setStarWarsResponse("")
    }, [id])

    return(
            isError == true ?
            <div>
                <h2 className="mb-3">These aren't the droids you're looking for.</h2>
                <img src="https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/05/ANH-Ben-identification.jpg" alt="" />
            </div>: 
            <div>
                <h1 className="mb-3">{starWarsResponse.name}</h1>
                <p>Height: {starWarsResponse.height} cm</p>
                <p>Mass: {starWarsResponse.mass} kg</p>
                <p>Birth Year: {starWarsResponse.birth_year}</p>
                <p>Hair Color: {starWarsResponse.hair_color}</p>
            </div>
    )
}

export default People