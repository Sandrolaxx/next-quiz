import { useEffect, useState } from 'react';
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

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
    const [questionIds, setQuestionIds] = useState<number[]>();
    const [question, setQuestion] = useState<QuestionModel>(questionMock);

    useEffect(() => {
        loadSurvey()
    }, []);

    async function loadSurvey() {
        const response = await fetch(`${BASE_URL}/survey`);
        const questionIds = await response.json();

        setQuestionIds(questionIds);
    }

    async function loadQuestion(questionId: number) {
        const response = await fetch(`${BASE_URL}/question/${questionId}`);
        const question = await response.json();

    }

    function handleResponse(question: QuestionModel) {
        setQuestion(question);
    }

    function handleTimeOver() {
        if (question.isNotAnswered()) {
            setQuestion(question.answerWith(-1));
        }
    }

    return (
        <Survey question={question} isLast
            handleAnswered={() => handleResponse}
            handleNextStep={handleTimeOver} />
    )
}