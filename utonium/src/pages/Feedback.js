import React, { useEffect } from "react";
import './Activities.css';

export default function Feedback(props){
    return(
        <div className="lista">
            <ul>
            <li className="table-row">
                <div className="col-1" >{props.emoticon}</div>
                <div className="col-3" >{props.data}</div>
            </li>
            </ul>
        </div>
    )
}