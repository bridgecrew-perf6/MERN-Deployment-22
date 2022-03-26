import React, { useState } from 'react'
import axios from 'axios'
import { useHistory,Link } from 'react-router-dom'
import './CreatePirate.css'

function CreatePirate() {

    const history = useHistory();

    const [pirateName, setPirateName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [chests, setChests] = useState("")
    const [pirateCatchPhrase, setPirateCatchPhrase] = useState("")
    const [crewPosition, setCrewPosition] = useState("")
    const [pegLeg, setPegLeg] = useState(true)
    const [eyePatch, setEyePatch] = useState(true)
    const [hookHand, setHookHand] = useState(true)

    const [errors, setErrors] = useState([]);


    function createPirate(e) {
        e.preventDefault();
        const newPirate = {
            pirateName,
            imageUrl,
            chests,
            pirateCatchPhrase,
            crewPosition,
            pegLeg,
            eyePatch,
            hookHand
        }
        console.log(newPirate)
        axios.post("http://localhost:8000/api/pirates/new", newPirate)
            .then(response => {
                history.push("/")
            })
            .catch(err => {
                const { errors } = err.response.data;
                const messages = Object.keys(errors).map(error => errors[error].message)
                setErrors(messages);
            })
    }


    return (
        <>
            <div className="navBar">
                <h1> Pirate Crew  </h1>
                <button><Link to="/pirates" > Dashboard </Link></button>
            </div>
        <div className='createPirate'>
            <form onSubmit={createPirate}>
                {errors.map((err, index) =>
                    (<p style={{ color: "red" }} key={index}>{err}</p>)
                )}
                <div>
                    <label>Pirate Name</label>
                    <input
                        type="text"
                        value={pirateName}
                        name="pirateName"
                        onChange={(e) => setPirateName(e.target.value)} />
                </div>
                <div>
                    <label>Image Url</label>
                    <input
                        type="text"
                        value={imageUrl}
                        name="imageUrl"
                        onChange={(e) => setImageUrl(e.target.value)} />
                </div>
                <div>
                    <label>Chests</label>
                    <input
                        type="number"
                        value={chests}
                        name="chests"
                        onChange={(e) => setChests(e.target.value)} />
                </div>
                <div>
                    <label>Pirate Catch Phrase</label>
                    <input
                        type="text"
                        value={pirateCatchPhrase}
                        name="pirateCatchPhrase"
                        onChange={(e) => setPirateCatchPhrase(e.target.value)} />
                </div>
                <div>
                    <label>Crew Position</label>
                    <select onChange={(e) => setCrewPosition(e.target.value)} value={crewPosition}>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boot Swain">Boot Swain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                </div>
                <div className='checkBox'>
                    {console.log(pegLeg)}
                    <input
                        type="checkbox"
                        value={pegLeg}
                        onChange={(e) => pegLeg ? setPegLeg(false) : setPegLeg(true)}
                        name="pegLeg"
                        checked={pegLeg}
                    />
                    <label>Peg Leg</label>
                </div>
                <div className='checkBox'>
                    <input
                        type="checkbox"
                        value={eyePatch}
                        onChange={(e) => eyePatch ? setEyePatch(false) : setEyePatch(true)}
                        name="eyePatch"
                        checked={eyePatch}
                    />
                    <label>Eye Patch</label>
                </div>
                <div className='checkBox'>
                    <input
                        type="checkbox"
                        value={hookHand}
                        onChange={(e) => hookHand ? setHookHand(false):setHookHand(true)}
                        name="hookHand"
                        checked={hookHand}
                    />
                    <label>Hook Hand</label>
                </div>
                <button className='createBtn'>Add Pirate</button>
            </form>
        </div>
        </>
    )
}

export default CreatePirate