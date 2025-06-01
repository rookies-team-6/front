// src/shared/Apis/listform.ts

import { devServerInstance } from "@shared/apiInstance";

interface Answer {
    id: number;
    title: string;
    content: string;
    date: string;
    score: number;
}

const getAnswers = async (isGroup: boolean): Promise<Answer[]> => {
    const endpoint = isGroup ? "/api/team-answers" : "/api/getmyanswers";
    const res = await devServerInstance.get(endpoint);
    return res.data;
};

export { getAnswers };
