import AnswerModel from '../model/answer'
import QuestionModel from '../model/question'
import Question from './components/Question'

export default function Home() {
    const questionTest = new QuestionModel(1, "Qual desses símbolos significa quilometro?", [
        AnswerModel.incorrect("KD"),
        AnswerModel.incorrect("KG"),
        AnswerModel.incorrect("KK"),
        AnswerModel.correct("KM")
    ])

    return (
        <div style={{display: "flex", height: "100vh", justifyContent: "center", alignItems: "center"}}>
            <Question value={questionTest} />
        </div>
    )
}