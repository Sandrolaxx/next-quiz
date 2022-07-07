import type { NextApiRequest, NextApiResponse } from 'next';
import QuestionModel from '../../../model/question';
import questions from "../questionsDatabase";

export default function handler(req: NextApiRequest, res: NextApiResponse<QuestionModel>) {
    res.status(200)
        .json(
            questions[0]
        );
}
