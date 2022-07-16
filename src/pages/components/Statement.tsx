import { StatementProps } from "../../utils/types";
import style from "../../styles/Statement.module.css";

export default function Statement({ text }: StatementProps) {
    return (
        <div className={style.container}>
            <span className={style.text}>
                {text}
            </span>
        </div>
    )
}