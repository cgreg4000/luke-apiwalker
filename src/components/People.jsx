import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";


const People = () => {

    const {id} = useParams();
    let [person, setPerson] = useState([]);
    let [personError, setPersonError] = useState(false);
    let [planet, setPlanet] = useState("");
    let [planetError, setPlanetError] = useState(false);

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(peopleResponse => {
                setPerson(peopleResponse.data);
                console.log(peopleResponse.data);
            })
            .catch(err => {
                setPersonError(true);
                console.log(err);
            })
            setPersonError(false);
            setPerson("");
    }, [id])
    
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then((planetResponse) => {
                setPlanet(planetResponse.data)
                console.log(planetResponse.data)
            })
            .catch(err => {
                setPlanetError(true);
                console.log(err);
            })
            setPlanetError(false);
            setPlanet("");
    }, [id])

    return(
            personError == true ?
            <div>
                <h1 className="mb-3">These aren't the droids you're looking for.</h1>
                <img src="https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/05/ANH-Ben-identification.jpg" alt="" />
            </div>: 
            <div>
                <h1 className="mb-3">{person.name}</h1>
                <p>Height: {person.height} cm</p>
                <p>Mass: {person.mass} kg</p>
                <p>Birth Year: {person.birth_year}</p>
                {
                    planetError == true ? <p>Homeworld: {person.homeworld}</p> :
                    <p>Homeworld: <Link to={`/planets/${id}`}>{planet.name}</Link></p>
                }
            </div>
    )
}

export default People