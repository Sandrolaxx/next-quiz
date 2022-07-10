import styles from "../../styles/Answer.module.css";
import { AnswerProps } from "../../utils/types";

export default function Answer({ value, index, letter, letterBackgroundColor, handleResponse }: AnswerProps) {
    return (
        <div className={styles.container} onClick={() => handleResponse(index)}>
            <div className={styles.content}>
                {!value.isRevealed() ?
                    <div className={styles.front}>
                        <div className={styles.letter}
                            style={{ backgroundColor: letterBackgroundColor }}>
                            {letter}
                        </div>
                        <div className={styles.value}>
                            {value.getValue()}
                        </div>
                    </div>
                    :
                    <div className={styles.back}>
                        {value.isCorrect() ?
                            <div className={styles.correct}>
                                <div>Resposta Correta!</div>
                                <div className={styles.value}>{value.getValue()}</div>
                            </div>
                            :
                            <div className={styles.incorrect}>
                                <div>Responsta Incoreta!</div>
                                <div className={styles.value}>{value.getValue()}</div>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    )
}