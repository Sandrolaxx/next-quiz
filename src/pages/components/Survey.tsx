import style from "../../styles/Survey.module.css";
import { SurveyProps } from "../../utils/types";
import Button from "./Button";
import Question from "./Question";

export default function Survey({ question, isLast, handleAnswered, handleNextStep }: SurveyProps) {

    function selectedQuestion(index: number) {
        if (question.isNotAnswered()) {
            handleAnswered(question.answerWith(index));
        }
    }

    return (
        <div className={style.container}>
            {question &&
                <>
                    <Question value={question} reponseTime={10}
                        handleResponse={selectedQuestion} handleTimeOver={handleNextStep} />
                    <Button text={isLast ? "Resultado" : "Próxima"} onClick={handleNextStep} />
                </>
            }
        </div>
    )
}