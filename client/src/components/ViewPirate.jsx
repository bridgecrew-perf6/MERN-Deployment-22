import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './ViewPirate.css'
import { Link, useHistory, useParams } from 'react-router-dom';

function ViewPirate() {

    const { id } = useParams()
    console.log(id);

    const history = useHistory();
    const [pirate, setPirate] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + id)
            .then(res => {
                setPirate(res.data.pirate)
            })
            .catch(err => console.log(err))
    }, [id, pirate.pegLeg, pirate.hookHand, pirate.eyePatch])

    function updatePegLeg() {
        const updatedPirate={
            ...pirate,
            pegLeg:pirate.pegLeg ? false:true
        }

        axios.put(("http://localhost:8000/api/pirates/" + id), updatedPirate)
        .then(response => {
            console.log("response Is:", response.data.pirate);
            setPirate(response.data.pirate)
            //history.push("/pirates/view/" + pirate._id)
        })
        .catch(error => { console.log(error) })
    }

    function updateEyePatch() {
        const updatedPirate={
            ...pirate,
            eyePatch:pirate.eyePatch ? false:true
        }

        axios.put(("http://localhost:8000/api/pirates/" + id), updatedPirate)
        .then(response => {
            console.log("response Is:", response.data.pirate);
            setPirate(response.data.pirate)
            //history.push("/pirates/view/" + pirate._id)
        })
        .catch(error => { console.log(error) })
    }

    function updateHookHand() {
        const updatedPirate={
            ...pirate,
            hookHand:pirate.hookHand ? false:true
        }

        axios.put(("http://localhost:8000/api/pirates/" + id), updatedPirate)
        .then(response => {
            console.log("response Is:", response.data.pirate);
            setPirate(response.data.pirate)
            history.push("/pirates/view/" + pirate._id)
        })
        .catch(error => { console.log(error) })
    }

    return (
        <>
            <div className="navBar">
                <h1> Pirate Crew  </h1>
                <button><Link to="/pirates" > Dashboard </Link></button>
            </div>
            <div className='viewPirate'>
                <div className='pirateName'>
                    <h1>{pirate.pirateName}</h1>
                </div>
                <div className="pirateDetails">

                    <div className='pirateImg'>
                        <img src={pirate.imageUrl} />
                        <h2>{pirate.pirateCatchPhrase}</h2>
                    </div>
                    <div className='pirateDetailsTwo'>
                        <h1>About</h1>
                        <p>Position : {pirate.crewPosition}</p>
                        <p>Tresure : {pirate.chests}</p>
                        <p>
                            PegLeg : {pirate.pegLeg ? "Yes" : "No"}
                            <span>
                                <button onClick={updatePegLeg}>{pirate.pegLeg ? "No" : "Yes"}</button>
                            </span>
                        </p>
                        <p>
                            Eye Patch : {pirate.eyePatch ? "Yes" : "No"}
                            <span>
                                <button onClick={updateEyePatch}>{pirate.eyePatch ? "No" : "Yes"}</button>
                            </span>
                        </p>
                        <p>
                            Hook Hand : {pirate.hookHand ? "Yes" : "No"}
                            <span>
                                <button onClick={updateHookHand}>{pirate.hookHand ? "No" : "Yes"}</button>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewPirate