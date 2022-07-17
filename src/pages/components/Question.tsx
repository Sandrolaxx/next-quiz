import { QuestionProps } from "../../utils/types";
import style from "../../styles/Question.module.css";
import Statement from "./Statement";
import Answer from "./Answer";
import { letters } from "../../utils/util";
import Timer from "./Timer";

export default function Question({ value, reponseTime, handleResponse, handleTimeOver }: QuestionProps) {
    return (
        value &&
        <div className={style.container}>
            <Statement text={value.getStatement()} />
            <Timer key={value.getId()}
                time={reponseTime ?? 10}
                handleTimeOver={handleTimeOver} />
            {value.getAnswers().map((answer, i) => (
                <Answer key={`${value.getId()}`.concat('-'.concat(i.toString()))}
                    value={answer} index={i}
                    letter={letters[i].value}
                    letterBackgroundColor={letters[i].color}
                    handleResponse={handleResponse} />
            ))}
        </div>
    )
}