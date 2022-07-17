import AnswerModel from "../../model/answer";
import QuestionModel from "../../model/question";

const questionsDatabase: QuestionModel[] = [
    new QuestionModel(1, "Qual desses símbolos significa quilometro?", [
        AnswerModel.incorrect("KD"),
        AnswerModel.incorrect("KG"),
        AnswerModel.incorrect("KK"),
        AnswerModel.correct("KM")
    ]),
    new QuestionModel(2, "Quem é o autor do manifesto comunista?", [
        AnswerModel.incorrect("Lenin"),
        AnswerModel.incorrect("Putin"),
        AnswerModel.incorrect("Allan Kardec"),
        AnswerModel.correct("Karl Marx")
    ]),
    new QuestionModel(3, "Que compositora brasileira fez sucesso com a sua marchinha 'Abre Alas'?", [
        AnswerModel.incorrect("Chiquita Bacana"),
        AnswerModel.incorrect("Chiquititas"),
        AnswerModel.incorrect("Chica da Silva"),
        AnswerModel.correct("Chiquinha Gonzaga")
    ]),
    new QuestionModel(4, "Qual é o animal que representa o signo de touro?", [
        AnswerModel.incorrect("Hipopótamo"),
        AnswerModel.incorrect("Cavalo"),
        AnswerModel.incorrect("Galo"),
        AnswerModel.correct("Touro")
    ]),
    new QuestionModel(5, "Qual é a doença que clareou a pele de Michael Jackson?", [
        AnswerModel.incorrect("Astigmatismo"),
        AnswerModel.incorrect("Disidrose"),
        AnswerModel.incorrect("Bruxismo"),
        AnswerModel.correct("Vitiligo")
    ]),
    new QuestionModel(6, "Quem é o parceiro de aventuras de Dom Quixote", [
        AnswerModel.incorrect("Lancelot"),
        AnswerModel.incorrect("Guilheme Tell"),
        AnswerModel.incorrect("Sigmund Freud"),
        AnswerModel.correct("Sancho pança")
    ]),
    new QuestionModel(7, "Violoncelo é um instrumento de:", [
        AnswerModel.incorrect("Percussão"),
        AnswerModel.incorrect("Repercussão"),
        AnswerModel.incorrect("Sopro"),
        AnswerModel.correct("Cordas")
    ]),
    new QuestionModel(8, "Que médico realizou a primeira cirurgia de ponte de safena no Brasil?", [
        AnswerModel.incorrect("Dr. Zerbini"),
        AnswerModel.incorrect("Dr. Fritz"),
        AnswerModel.incorrect("Dr. Calligari"),
        AnswerModel.correct("Dr. Jatene")
    ]),
    new QuestionModel(9, "Quem é a mulher do Tarzan?", [
        AnswerModel.incorrect("Diana"),
        AnswerModel.incorrect("Louis Laine"),
        AnswerModel.incorrect("Chita"),
        AnswerModel.correct("Jane")
    ]),
    new QuestionModel(10, "Que profissional conduz o elevador?", [
        AnswerModel.incorrect("Condutor"),
        AnswerModel.incorrect("Elevadorista"),
        AnswerModel.incorrect("Botonista"),
        AnswerModel.correct("Ascensorista")
    ]),
    new QuestionModel(11, "Como é chamado o homem sedutor o conquistador irresistível?", [
        AnswerModel.incorrect("Dom Dóca"),
        AnswerModel.incorrect("Dom Galá"),
        AnswerModel.incorrect("Dom Divino"),
        AnswerModel.correct("Dom Juan")
    ]),
    new QuestionModel(12, "Que fruta é ressecada para se tornar uma ameixa seca?", [
        AnswerModel.incorrect("Melão"),
        AnswerModel.incorrect("Uva"),
        AnswerModel.incorrect("Pêssego"),
        AnswerModel.correct("Ameixa")
    ]),
    new QuestionModel(13, "O que tem em comum rosa lilás e azul?", [
        AnswerModel.incorrect("São vinhos"),
        AnswerModel.incorrect("São flores"),
        AnswerModel.incorrect("São ilhas"),
        AnswerModel.correct("São cores")
    ]),
    new QuestionModel(14, "Baguete e francês são:", [
        AnswerModel.incorrect("Provas Olímpicas"),
        AnswerModel.incorrect("Queijos"),
        AnswerModel.incorrect("Línguas Românticas"),
        AnswerModel.correct("Tipos de pão")
    ]),
    new QuestionModel(15, "O que é ornitorrinco?", [
        AnswerModel.incorrect("Vulcão"),
        AnswerModel.incorrect("Rio"),
        AnswerModel.incorrect("Legume"),
        AnswerModel.correct("Animal")
    ]),
]

export default questionsDatabase;