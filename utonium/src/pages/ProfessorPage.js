import React from "react";
import './ProfesorPage.css';
import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

export default function ProfessorPage(){
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [profesor, setProfesor] = useState()
    let navigate = useNavigate(); 

    const handlerClick=(e)=>{
        axios.get(`http://localhost:8080/profesor/${name}/${password}`)
        .then((response) => {
            setProfesor(response.data)
            if(response.data) {
                navigate(`/profesor/${response.data.id}`)
            }
        })
    }
    return(
        <div className="box">
            <form>
		        <span className="text-center">login</span>
	            <div className="input-container">
		            <input type="text" required="" placeholder="name" onChange={(e) => setName(e.target.value)}/>
		            <label>Name</label>		
	            </div>
	            <div className="input-container">		
		            <input type="password" required="" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
		            <label>Parola</label>
	            </div>
		        <button type="button" className="btn" onClick={handlerClick}>submit</button>
            </form>	
        </div>
    )
}
