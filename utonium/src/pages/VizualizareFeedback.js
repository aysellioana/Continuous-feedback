import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Feedback from "./Feedback";
import './VizualizareFeedback.css';

export default function VizualizareFeedback(props){
    const { id } = useParams()
    const [feedbackuri, setFeedbackuri] = useState([])
    const [nrFeedbackrui, setNrFeedbackuri] = useState([0, 0, 0, 0])
    const [emoticoane, setEmoticoane] = useState(["smileyFace", "frownyFace", "surprisedFace", "confusedFace"])

    useEffect(() => {
        axios.get(`http://localhost:8080/activitate/${id}/feedback`)
        .then((response) => {
            setFeedbackuri(response.data)
        }) 
    }, [])

    if(feedbackuri.length != 0) {
        return(
            <div className="vizualizareFeedback">
                <h1>Feedback-ul activitatii este:</h1>
                {
                    feedbackuri.map((e) => <Feedback key={e.id} emoticon={e.emoticon} data={e.data}/>)
                }
            </div>
        )
    } else {
        return(
            <h1>Activitatea nu are feedback-uri</h1>
        )
    }
}