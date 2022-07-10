import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../../styles/Timer.module.css";
import { TimerProps } from "../../utils/types";
import { timerColors } from "../../utils/util";

export default function Timer({ time, handleTimeOver }: TimerProps) {
    return (
        <div className={styles.container}>
            <CountdownCircleTimer size={120} isPlaying duration={time} onComplete={handleTimeOver}
                 colors={timerColors.colors} colorsTime={timerColors.colorsTime}>
                    {({remainingTime}) => remainingTime}
                 </CountdownCircleTimer>
        </div>
    )
}