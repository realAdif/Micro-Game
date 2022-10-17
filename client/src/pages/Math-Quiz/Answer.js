import React from "react"


export default function Answer({answersText,onSelectAnswer}){
    return (
        <div className="answer" onClick={() => onSelectAnswer(answersText)}>
            <div className="answersText">{answersText}</div>
        </div>
    )
}