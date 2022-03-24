import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const People = () => {

    const { id } = useParams();
    let [person, setPerson] = useState({});
    let [planet, setPlanet] = useState({});
    let [isError, setIsError] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(peopleResponse => {
                setPerson(peopleResponse.data);
                console.log(peopleResponse.data);
                console.log("Got the person")
                axios.get(peopleResponse.data.homeworld)
                    .then(planetResponse => {
                        console.log("Got the planet")
                        console.log(planetResponse)
                        setPlanet(planetResponse.data)
                    })
                    .catch(err => {
                        console.log("error getting planet")
                        console.log(err)
                    })
            })
            .catch(err => {
                setIsError(true);
                console.log("error getting person")
                console.log(err);
            })
        setIsError(false);
        setPerson("");
    }, [id])

    return (
        isError === true ?
            <div>
                <h1 className="mb-3">These aren't the droids you're looking for.</h1>
                <img src="https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/05/ANH-Ben-identification.jpg" alt="Obi-Wan Kenobi" />
            </div> :
            <div>
                <h1 className="mb-3">{person.name}</h1>
                <p>Height: {person.height} cm</p>
                <p>Mass: {person.mass} kg</p>
                <p>Birth Year: {person.birth_year}</p>
                <p>Home World: {planet.name}</p>
            </div>
    )
}

export default People