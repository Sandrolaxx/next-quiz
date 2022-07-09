export default class AnswerModel {
    
    private value: string;

    private correct: boolean;

    private revealed: boolean;

    constructor(value: string, correct: boolean, revealed = false) {
        this.value = value;
        this.correct = correct;
        this.revealed = revealed;
    }

    static correct(value: string) {
        return new AnswerModel(value, true);
    }

    static incorrect(value: string) {
        return new AnswerModel(value, false);
    }

    public getValue() {
        return this.value;
    }

    public isCorrect() {
        return this.correct;
    }

    public isRevealed() {
        return this.revealed;
    }

    reveal() {
        return new AnswerModel(this.getValue(), this.isCorrect(), true);
    }

}