import React, { useContext } from "react";
import { QuizContext } from "./context/quiz";
import Question from "./Question";


export default function Quiz (){
    const [quizState, dispatch] = useContext(QuizContext);
    console.log(quizState);
    return (
        <div className="quiz">
            {quizState.showResults && (
            <div className="result">
                <div className="end-quiz">End quiz</div>
                <div className="result-info">
                    <div>
                        You have got {quizState.correntAnswerCount} of {" "} {quizState.questions.length}
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

