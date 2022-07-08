import { NextApiRequest, NextApiResponse } from "next";
import { shuffleList } from "../../../utils/util";
import questions from "../questionsDatabase";

export default function handler(req: NextApiRequest, res: NextApiResponse<number[]>) {
    const questionIdList = questions.map(question => question.getId());

    res.status(200)
        .json(
            shuffleList(questionIdList)
        );
}
