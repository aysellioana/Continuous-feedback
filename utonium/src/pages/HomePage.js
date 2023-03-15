import React from "react";

import { NavLink } from "react-router-dom";
import './HomePage.css';

export default function HomePage(){
    return(
        <div className="navbar">
            <h1 >Selectati tipul de utilizator:</h1>
            <ul className="optiuni">
                <li><NavLink to="/student">Student</NavLink></li>
                <li><NavLink to="/profesor">Profesor</NavLink></li>
            </ul>
        </div>
    )
}

