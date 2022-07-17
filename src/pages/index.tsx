import Image from "next/image";
import { useEffect } from "react";
import silvioImage from "../assets/blessSilvio.png";
import useHome from "../hooks/useHome";
import style from "../styles/Home.module.css";
import Button from "./components/Button";
import Survey from "./components/Survey";

export default function Home() {
    const home = useHome();

    useEffect(() => {
        home.loadSurvey()
    }, []);

    useEffect(() => {
        home.questionIds && home.loadQuestion(home.questionIds[0])
    }, [home.questionIds]);

    return (
        home.isStartScreen ?
            <div className={style.container}>
                <Image src={silvioImage} width={500} height={400} quality={100} alt="Bless Silvio" />
                <span className={style.title}>Melhores Perguntas do Show do Milhão🌽</span>
                <Button text="Começar" onClick={() => home.setStartScreen(false)} />
            </div>
            :
            home.question &&
            <Survey question={home.question} isLast={home.idNextQuestion() === undefined}
                handleAnswered={home.handleResponse}
                handleNextStep={home.goToNextStep} />
    )
}