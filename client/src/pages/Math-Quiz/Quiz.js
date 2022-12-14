import React, { useContext } from "react";
import { QuizContext } from "./context/quiz";
import Question from "./Question";
import Navbar from "../Navbar";
import './style/quiz.css'

export default function Quiz (){
    const [quizState, dispatch] = useContext(QuizContext);
    console.log(quizState);
    return (
        <div className="quiz">
            <Navbar/>
            {quizState.showResults && (
            <div className="result">
                <div className="end-quiz">End quiz</div>
                <div className="result-info">
                    <div>
                        You have got {quizState.correntAnswerCount} of {" "} {quizState.questions.length} right
                    </div>
                    <div className="nextButton" onClick={() => dispatch({type: "RESTART"})}> play again</div>
                </div>
            </div>
            )} 
            {!quizState.showResults && (
                <div>
                    <div className="score">
                        Question {quizState.currentQuestionIndex + 1} / {quizState.questions.length}
                    </div>
                    <Question/>
                <div className="nextButton" onClick={() => dispatch({type:"NEXT_QUESTION"})}>Next question</div>
                </div>
            )}
            
        </div>

    )
}

