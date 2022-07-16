import { StatisticProps } from "../../utils/types";
import style from "../../styles/Statistic.module.css";

export default function Statistic({ text, value, fontColor, backGroundColor }: StatisticProps) {
    return (
        <div className={style.container}>
            <div className={style.value}
                style={{
                    backgroundColor: backGroundColor ?? "#FDD60F",
                    color: fontColor ?? "#333"
                }}>
                {value}
            </div>
            <div className={style.text}>
                {text}
            </div>
        </div>
    );
}