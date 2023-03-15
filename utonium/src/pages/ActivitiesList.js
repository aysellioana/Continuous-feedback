import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Activitate from "./Activitate"
import './ListActivities.css';

export default function ActivitiesList(params){
    const [activitati, setActivitati] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/profesor/${params.profesorId}/activitate`)
        .then((response) => {
            setActivitati(response.data)
        }) 
    }, [])
    return(
        <div className="container">
            <h3>Lista de activitati</h3>
            <ul>
                <li className="table-header">
                <div className="col col-1">Nume activitate</div>
                <div className="col col-2">Descriere</div>
                <div className="col col-3">Data Inceput</div>
                <div className="col col-4">Durata</div>
                </li>
            </ul>
            {
                activitati.map((e) => <Activitate key={e.id} id={e.id} name={e.name} descriere={e.descriere} dataInceput={e.dataInceput} durata={e.durata}/>)
            }
        </div>
    )
}
