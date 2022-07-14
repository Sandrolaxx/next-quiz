import AnswerModel from "../model/answer";
import QuestionModel from "../model/question";

export interface QuestionProps {
    value: QuestionModel;
    reponseTime?: number;
    handleResponse: (index: number) => void;
    handleTimeOver: () => void;
}

export interface AnswerProps {
    value: AnswerModel;
    index: number;
    letter: string;
    letterBackgroundColor: string;
    handleResponse: (index: number) => void;
}

export interface StatementProps {
    text: string;
}

export interface TimerProps {
    time: number;
    handleTimeOver: () => void;
}

export interface ButtonProps {
    text: string;
    href?: string;
    onClick?: (e: any) => void;
}

export interface SurveyProps {
    question: QuestionModel;
    isLast: boolean;
    handleAnswered: (question: QuestionModel) => void;
    handleNextStep: () => void;
}