import { QuestionProps } from "../../utils/types";
import styles from "../../styles/Question.module.css";
import Statement from "./Statement";

export default function Question({ value}: QuestionProps) {
    return (
        <div className={styles.container}>
            <Statement text={value.getStatement()} />
        </div>
    )
}