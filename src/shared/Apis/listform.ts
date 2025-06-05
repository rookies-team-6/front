import { devServerInstance } from "@shared/apiInstance";

export const fetchQuestions = async () => {
  const res = await devServerInstance.get("/api/questions/me");
  return res.data;
};

export const fetchMyScores = async () => {
  const res = await devServerInstance.get("/admin/users/scores");
  return res.data;
};

export const fetchDeptAverages = async () => {
  const res = await devServerInstance.get("/dept-scores/averaged");
  return res.data;
};

export const fetchBookmarkedAnswers = async () => {
  const res = await devServerInstance.get("/api/record/bookmarked");
  return res.data;
};