import { devServerInstance } from "@shared/apiInstance";

interface ScoreItem {
  team: string;
  score: string;
}

const getScoreItems = async (): Promise<ScoreItem[]> => {
    const res = await devServerInstance.get("/api/scores");
    return res.data;
};

export { getScoreItems }