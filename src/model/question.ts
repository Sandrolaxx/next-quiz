import { shuffleList } from "../utils/util";
import AnswerModel from "./answer";

export default class QuestionModel {

    private id: number;

    private statement: string;

    private answers: AnswerModel[];

    private gotRight: boolean;

    constructor(id: number, statement: string, answers: AnswerModel[], gotRight = false) {
        this.id = id;
        this.statement = statement;
        this.answers = answers;
        this.gotRight = gotRight;
    }

    public getId() {
        return this.id;
    }

    public getStatement() {
        return this.statement;
    }

    public getAnswers() {
        return this.answers;
    }

    public isGotRight() {
        return this.gotRight;
    }

    public isAnswered() {
        return this.getAnswers()
            .reduce((prevVal, currVal) => currVal.isRevealed(), false);
    }

    public isNotAnswered() {
        return !this.isAnswered();
    }

    answerWith(index: number): QuestionModel {
        const gotRight = this.getAnswers()[index]?.isCorrect();
        const answers = this.getAnswers().map((answer, i) => {
            const selectedAnswer = index === i;
            const isReveal = selectedAnswer || answer.isCorrect();

            return isReveal ? answer.reveal() : answer;
        });

        return new QuestionModel(this.getId(), this.getStatement(), answers, gotRight);
    }

    shuffleAnswers() {
        let shuffleAnswers = shuffleList(this.getAnswers());

        return new QuestionModel(this.getId(), this.getStatement(), shuffleAnswers, this.isGotRight());
    }

    toObject() {
        return {
            id: this.getId(),
            statement: this.getStatement(),
            isAnswered: this.isAnswered(),
            gotRight: this.isGotRight(),
            answers: this.getAnswers()
        }
    }

}