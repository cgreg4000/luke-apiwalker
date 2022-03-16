import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Planet = () => {
    const {id} = useParams();
    let [starWarsResponse, setStarWarsResponse] = useState([]);
    let [isError, setIsError] = useState(false);

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then((response) => {
                setStarWarsResponse(response.data);
                console.log(response.data);
            })
            .catch(err => {
                setIsError(true);
                console.log(err);
            })
            setIsError(false);
            setStarWarsResponse("");
    }, [id])

    return(
            isError == true ?
            <div>
                <h1 className="mb-3">These aren't the droids you're looking for.</h1>
                <img src="https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/05/ANH-Ben-identification.jpg" alt="" />
            </div>: 
            <div>
                <h1 className="mb-3">{starWarsResponse.name}</h1>
                <p>Diameter: {starWarsResponse.diameter} km</p>
                <p>Climate: {starWarsResponse.climate}</p>
                <p>Population: {starWarsResponse.population}</p>
                <p>Terrain: {starWarsResponse.terrain}</p>
            </div>
    )
}

export default Planet