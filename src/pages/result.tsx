import { useRouter } from "next/router"
import { getInterValueFromQuery } from "../utils/util";
import style from "../styles/Result.module.css";
import Statistic from "./components/Statistic";
import Button from "./components/Button";

export default function Result() {
    const router = useRouter();

    const total = getInterValueFromQuery(router.query.total);
    const correct = getInterValueFromQuery(router.query.correct);
    const percentual = Math.round((correct / total) * 100);

    return (
        <div className={style.container}>
            <h1>Resultado Final</h1>
            <div className={style.content}>
                <Statistic text="Perguntas" value={total} />
                <Statistic text="Acertos" value={correct} backGroundColor="#03ca03" />
                <Statistic text="Percentual" value={`${percentual}%`} backGroundColor="#ee7504" />
            </div>
            <Button href="/" text="Tentar Novemente" />
        </div>
    )
}