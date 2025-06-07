import { devServerInstance } from "@shared/apiInstance";

export interface ScoreItem {
  groupNum: number;
  groupScore: number;
}

export const getScoreItems = async (): Promise<ScoreItem[]> => {
  const res = await devServerInstance.get("/api/home");
  return res.data?.data?.groupScores ?? [];
};
