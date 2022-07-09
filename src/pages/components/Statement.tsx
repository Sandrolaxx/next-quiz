import { QuestionProps, StatementProps } from "../../utils/types";
import styles from "../../styles/Statement.module.css";

export default function Statement({ text }: StatementProps) {
    return (
        <div className={styles.container}>
            <span className={styles.text}>
                {text}
            </span>
        </div>
    )
}