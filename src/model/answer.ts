export default class AnswerModel {
    
    private value: number;

    private correct: boolean;

    private revealed: boolean;

    constructor(value: number, correct: boolean, revealed = false) {
        this.value = value;
        this.correct = correct;
        this.revealed = revealed;
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

}