import { QuestionProps } from "../../utils/types";
import styles from "../../styles/Question.module.css";
import Statement from "./Statement";
import Answer from "./Answer";
import { letters } from "../../utils/util";
import Timer from "./Timer";
import Button from "./Button";

export default function Question({ value, reponseTime, handleResponse, handleTimeOver }: QuestionProps) {
    return (
        <div className={styles.container}>
            <Statement text={value.getStatement()} />
            <Timer time={reponseTime ?? 10} handleTimeOver={handleTimeOver} />
            {value.getAnswers().map((answer, i) => (
                <Answer key={i} value={answer} index={i} letter={letters[i].value} 
                    letterBackgroundColor={letters[i].color} handleResponse={handleResponse} />
            ))}
            <Button text="Próxima" href="/result" onClick={() => console.log("teste")} />
        </div>
    )
}