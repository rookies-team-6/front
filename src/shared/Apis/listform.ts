import { devServerInstance, serverInstance } from "@shared/apiInstance";

// 내 질문/답변 목록
export const fetchQuestions = async () => {
    const res = await devServerInstance.get("/api/questions/me");
    return res.data;
};

// 북마크된 답변 목록
export const fetchBookmarkedAnswers = async () => {
    const res = await devServerInstance.get("/api/record/bookmarked");
    return res.data;
};

// 홈 정보 (개인 점수 + 그룹 점수 포함)
export const fetchHomeInfo = async () => {
    const res = await serverInstance.get("/api/home");
    return res.data; // { success, data: { user, groupScores }, ... }
};
