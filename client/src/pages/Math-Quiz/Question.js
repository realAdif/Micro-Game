import React,{useContext} from "react";
import { QuizContext } from "./context/quiz";
import Answer from "./Answer"

export default function Question (){
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex]
    return (
        <div>
            <div className="question">{currentQuestion.question}</div>
            <div className="answers">
                {quizState.answers.map((answers, index) =>(
                    <Answer answersText={answers} key={index} 
                    onSelectAnswer={(answersText) => dispatch({type: 'SELECT_ANSWER', payload: answersText})}/>
                ))}
            </div>
        </div>

    )
}