// src/shared/Apis/listform.ts

import { devServerInstance } from "@shared/apiInstance";

interface Answer {
    id: number;
    title: string;
    content: string;
    date: string;
    score: number;
}

const getAnswers = async (): Promise<Answer[]> => {
    const res = await devServerInstance.get("/api/getmyanswers");
    return res.data;
};

export { getAnswers };
