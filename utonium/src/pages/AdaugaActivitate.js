import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import './AdaugaActivitate.css';

export default function AdaugaActivitate(){
    const { id } = useParams()
    const [name, setName] = useState('')
    const [descriere, setDescriere] = useState('')
    const [dataInceput, setDataInceput] = useState()
    const [durata, setDurata] = useState()
    const [cod, setCod] = useState()
    let navigate = useNavigate()

    const handleClick = (e) => {    
        console.log(name)
        console.log(descriere)
        console.log(dataInceput)
        console.log(durata)
        axios.post(`http://localhost:8080/profesor/${id}/activitate`, {
            name: name,
            descriere: descriere,
            cod: cod,
            dataInceput: dataInceput,
            durata: durata
        })
        .then(() => {
            // setOpen(false);
            // window.location.reload(false);
            //refresh()
            navigate(`/profesor/${id}`)
        });
    }

    return(
        <div className="adaugaActivity">
            <form>
                <div>
                <label>Name: </label><input type="text" onChange={(e) => setName(e.target.value)}></input>
                </div>
                <br/>
                <div>
                <label>Descriere: </label><input type="text" onChange={(e) => setDescriere(e.target.value)}></input>
                </div>
                <br/>
                <div>
                <label>Cod: </label><input type="text" onChange={(e) => setCod(e.target.value)}></input>
                </div>
                <br/>
                <div>
                <label>Data Inceput: </label><input type="date" onChange={(e) => setDataInceput(e.target.value)}></input>
                </div>
                <br/>
                <div>
                <label>Durata: </label><input type="text" onChange={(e) => setDurata(e.target.value)}></input> 
                </div>
            
            <button type="button" className="btn" onClick={handleClick}>Adauga </button>
            </form>
        </div>
    )
}