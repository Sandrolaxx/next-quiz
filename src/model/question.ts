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

}