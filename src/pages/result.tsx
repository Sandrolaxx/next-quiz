import Link from "next/link";
import { useRouter } from "next/router";
import style from "../styles/Result.module.css";
import { getInterValueFromQuery } from "../utils/util";
import Button from "./components/Button";
import Statistic from "./components/Statistic";

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
                <Statistic text="Acertos"
                    value={correct}
                    backGroundColor="linear-gradient(90deg, #61a803 30%, #00fd2a 100%)" />
                <Statistic text="Percentual"
                    value={`${percentual}%`}
                    backGroundColor="linear-gradient(90deg, #f55409 30%, #ff7402 100%)" />
            </div>
            <span className={style.text}>
                Sim bizarramente essas perguntas foram realmente feitas no Show do milhão
                <Link href="https://buzzfeed.com.br/post/15-respostas-do-show-do-milhao-que-so-podem-ter-sido-boladas-pelo-proprio-silvio-santos">
                    👉 Link da materia sobre
                </Link>
            </span>
            <Button href="/" text="Tentar Novamente" />
        </div>
    )
}
