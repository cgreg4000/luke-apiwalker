import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const People = () => {

    const {id} = useParams();
    let [person, setPerson] = useState({});
    let [isError, setIsError] = useState(false);

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(peopleResponse => {
                setPerson(peopleResponse.data);
                console.log(peopleResponse.data);
            })
            .catch(err => {
                setIsError(true);
                console.log(err);
            })
            setIsError(false);
            setPerson("");
    }, [id])
    
    return(
            isError === true ?
            <div>
                <h1 className="mb-3">These aren't the droids you're looking for.</h1>
                <img src="https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/05/ANH-Ben-identification.jpg" alt="Obi-Wan Kenobi" />
            </div>: 
            <div>
                <h1 className="mb-3">{person.name}</h1>
                <p>Height: {person.height} cm</p>
                <p>Mass: {person.mass} kg</p>
                <p>Birth Year: {person.birth_year}</p>
                <p>Hair Color: {person.hair_color}</p>
            </div>
    )
}

export default People