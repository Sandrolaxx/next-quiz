import { useState } from 'react';
import AnswerModel from '../model/answer'
import QuestionModel from '../model/question'
import Question from './components/Question'
import Survey from './components/Survey';

const questionMock = new QuestionModel(1, "Qual desses símbolos significa quilometro?", [
    AnswerModel.incorrect("KD"),
    AnswerModel.incorrect("KG"),
    AnswerModel.incorrect("KK"),
    AnswerModel.correct("KM")
]);

export default function Home() {
    const [question, setQuestion] = useState(questionMock);

    function handleResponse(question: QuestionModel) {
        setQuestion(question);
    }

    function handleTimeOver() {
        if (question.isNotAnswered()) {
            setQuestion(question.answerWith(-1));
        }
    }

    return (
        <div style={{display: "flex", height: "100vh", justifyContent: "center", alignItems: "center"}}>
            <Survey question={question} isLast handleAnswered={() => handleResponse} handleNextStep={handleTimeOver}/>
        </div>
    )
}