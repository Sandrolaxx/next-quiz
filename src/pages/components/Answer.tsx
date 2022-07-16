import style from "../../styles/Answer.module.css";
import { AnswerProps } from "../../utils/types";

export default function Answer({ value, index, letter, letterBackgroundColor, handleResponse }: AnswerProps) {
    const answerRevealed = value.isRevealed() ? style.answerRevealed : "";

    return (
        <div className={style.container} onClick={() => handleResponse(index)}>
            <div className={`${answerRevealed} ${style.content}`}>
                    <div className={style.front}>
                        <div className={style.letter}
                            style={{ backgroundColor: letterBackgroundColor }}>
                            {letter}
                        </div>
                        <div className={style.value}>
                            {value.getValue()}
                        </div>
                    </div>
                    <div className={style.back}>
                        {value.isCorrect() ?
                            <div className={style.correct}>
                                <div>Resposta Correta!</div>
                                <div className={style.value}>{value.getValue()}</div>
                            </div>
                            :
                            <div className={style.incorrect}>
                                <div>Responsta Incoreta!</div>
                                <div className={style.value}>{value.getValue()}</div>
                            </div>
                        }
                    </div>
            </div>
        </div>
    )
}