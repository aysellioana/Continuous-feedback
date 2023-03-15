import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import './Activities.css';
import { useNavigate } from "react-router-dom";

export default function Activitate(props){
    let navigate = useNavigate()

    const handleClick = () => {
        navigate(`/activitate/${props.id}/feedback`)
    }

    return(
        <div className="lista">
            <ul>
            <li className="table-row">
                <div className="col-1" onClick={handleClick}>{props.name}</div>
                <div className="col-2" >{props.descriere}</div>
                <div className="col-3" >{props.dataInceput}</div>
                <div className="col-4" >{props.durata}</div>
                </li>
            </ul>
        </div>
    )
}