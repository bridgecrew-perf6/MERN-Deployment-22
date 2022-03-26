import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './DisplayAllPirates.css'
import { Link } from 'react-router-dom';


function DisplayAllPirates() {
    const [pirates, setPirates] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then(response => {
                console.log("Get All pirates response: ", response)
                setPirates(response.data.pirates)
                //setPirates(pirates.sort())
                const allPirates=pirates.sort(function(a,b){
                    if(a.pirateName < b.pirateName) {return -1}
                    if(a.pirateName < b.pirateName) {return 1}
                })
                console.log("ALL PIRATES:",allPirates)
            })
            .catch(error => console.log(error));

    }, [])

    function handleDelete(id) {
        console.log("In Handle delete")
        axios.delete("http://localhost:8000/api/pirates/" + id)
            .then(response => {
                console.log(response.data);
                setPirates(pirates.filter((pirate) => pirate._id !== id))
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <div className="navBar">
                <h1> Pirate Crew  </h1>
                <button><Link to="/pirates/new" > Create </Link></button>
            </div>
            <div className='allPirates'>

                {
                    pirates.map((pirate, i) => {
                        return (
                            <div className='pirateCard' key={i}>
                                <img src={pirate.imageUrl} />
                                <div className='pirateDetails'>
                                    <h3>{pirate.pirateName}</h3>
                                    <button className='viewButton'><Link to={"/pirates/view/" + pirate._id}>View Pirate</Link></button>
                                    <button className='deleteButton' onClick={() => handleDelete(pirate._id)}>Walk the Plank</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default DisplayAllPirates