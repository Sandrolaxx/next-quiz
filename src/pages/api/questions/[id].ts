import type { NextApiRequest, NextApiResponse } from 'next';
import QuestionModel from '../../../model/question';
import questions from "../questionsDatabase";

export default function handler(req: NextApiRequest, res: NextApiResponse<QuestionModel | string>) {
    const selectedId = Number.parseInt(req.query.id);

    const selectedQuestion = questions.filter(question => question.getId() === selectedId);

    if (selectedQuestion.length === 1) {
        res.status(200)
            .json(
                selectedQuestion[0]
            );
    } else {
        res.status(404).json("Pergunta não encontrada");
    }

}
