import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Planet = () => {

    const {id} = useParams()

    let [starWarsResponse, setStarWarsResponse] = useState([])

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then((response) => {
                console.log(response.data)
                setStarWarsResponse(response.data)
                
            })
    }, [id])

    return(
        <>
            <h1>{starWarsResponse.name}</h1>
            <p>Diameter: {starWarsResponse.diameter} km</p>
            <p>Climate: {starWarsResponse.climate}</p>
            <p>Population: {starWarsResponse.population}</p>
            <p>Terrain: {starWarsResponse.terrain}</p>
        </>
    )
}

export default Planet