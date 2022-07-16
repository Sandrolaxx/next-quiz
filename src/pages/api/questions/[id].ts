import type { NextApiRequest, NextApiResponse } from 'next';
import { getInterValueFromQuery } from '../../../utils/util';
import questions from "../questionsDatabase";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const selectedId = getInterValueFromQuery(req.query.id);

    const selectedQuestion = questions.filter(question => question.getId() === selectedId);

    if (selectedQuestion.length === 1) {
        res.status(200)
            .json(
                selectedQuestion[0].toObject()
            );
    } else {
        res.status(404).json("Pergunta não encontrada");
    }

}
