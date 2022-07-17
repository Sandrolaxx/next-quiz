import { useRouter } from "next/router";
import { useState } from "react";
import QuestionModel from "../model/question";

const BASE_URL = "http://localhost:3000/api";

export default function useHome() {
    const router = useRouter();
    const [questionIds, setQuestionIds] = useState<number[]>();
    const [question, setQuestion] = useState<QuestionModel>();
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);
    const [isStartScreen, setStartScreen] = useState(true);

    async function loadSurvey() {
        const response = await fetch(`${BASE_URL}/survey`);
        const questionIds = await response.json();

        setQuestionIds(questionIds);
    }

    async function loadQuestion(questionId: number) {
        const response = await fetch(`${BASE_URL}/questions/${questionId}`);
        const question = await response.json();
        const questionModel = QuestionModel.fromJson(question);

        setQuestion(questionModel);
    }

    function idNextQuestion() {
        if (questionIds && question) {
            const nextIndex = questionIds.indexOf(question.getId()) + 1;

            return questionIds[nextIndex];
        }
    }

    function goToNextStep() {
        const nextQuestionId = idNextQuestion();

        nextQuestionId ? loadQuestion(nextQuestionId) : handleFinish();
    }

    function handleFinish() {
        router.push({
            pathname: "/result",
            query: {
                total: questionIds?.length,
                correct: correctAnswers
            }
        });
    }

    function handleResponse(selectedQuestion: QuestionModel) {
        setQuestion(selectedQuestion);

        if (selectedQuestion.isGotRight()) {
            setCorrectAnswers(correctAnswers + (selectedQuestion.isGotRight() ? 1 : 0));
        }
    }

    return {
        question, isStartScreen, questionIds, setStartScreen, loadQuestion,
        loadSurvey, handleResponse, idNextQuestion, goToNextStep
    }
}