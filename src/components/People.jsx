import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const People = () => {

    const {id} = useParams()

    let [starWarsResponse, setStarWarsResponse] = useState([])

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then((response) => {
                setStarWarsResponse(response.data)
            })
    }, [id])

    return(
        <>
            <h1>{starWarsResponse.name}</h1>
            <p>Height: {starWarsResponse.height} cm</p>
            <p>Mass: {starWarsResponse.mass} kg</p>
            <p>Hair Color: {starWarsResponse.hair_color}</p>
            <p>Skin Color: {starWarsResponse.skin_color}</p>
        </>
    )
}

export default People