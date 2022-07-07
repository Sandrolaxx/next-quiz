import { NextApiRequest, NextApiResponse } from "next";
import questions from "../questionsDatabase";

export default function handler(req: NextApiRequest, res: NextApiResponse<number[]>) {
    res.status(200)
        .json(
            questions.map(question => question.getId())
        );
}
