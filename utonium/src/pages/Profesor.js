import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ActivitiesList from "./ActivitiesList";
import './Profesor.css';

export default function Profesor(){
    const { id } = useParams()
    const [profesor, setProfesor] = useState()
    let navigate = useNavigate()
    
    const handleClick = (e) => { 
        navigate(`/profesor/${id}/activitate/`)
    }

    // useEffect(() => {
    //     axios.get(`http://localhost:8080/profesor/${id}`)
    //     .then((response) => {
    //         setProfesor(response.data)
    //         console.log(response.data)
    //     })
    // }, [])

    return(
        <div>
            <h1>Profesor</h1>
            <div >
                <li>
                <button className="btnAdauga" onClick={handleClick}>Adauga activitate noua</button>
                </li>
                
            </div>
            <ActivitiesList profesorId={id}/>
        </div>
    )
}
