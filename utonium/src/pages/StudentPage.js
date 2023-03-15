import React, { useState } from "react";
import './StudentPage.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function StudentPage(){
    const [cod, setCod] = useState('')
    let navigate = useNavigate()

    const handleClick = (e) => {
        axios.get(`http://localhost:8080/activitate/${cod}`)
        .then((response) => {
            setCod(response.data)
            if(response.data) {
                navigate(`/activitate/${response.data.id}`)
            }
        })
    }
    return(
        <div className="student">
            <label>Introduceti codul activitatii:  </label><input type="text" placeholder="cod" onChange={(e) => setCod(e.target.value)}></input>
            <br/>
            <br/>
            <br/>
            <button className="btnIntrodu" onClick={handleClick}>Introduceti codul</button>
        </div>
    )
}
