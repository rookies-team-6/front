import { devServerInstance } from "@shared/apiInstance";

export interface Answer {
  id: number;
  title: string;
  content: string;
  date: string;
  score: number;
}

/**
 * API 주소를 전달받아 답변 목록을 가져오는 함수
 * @param url API 주소 (예: "/api/getmyanswers", "/api/team-answers")
 */
const getAnswers = async (url: string): Promise<Answer[]> => {
  const res = await devServerInstance.get(url);
  console.log("✅ API 응답:", res.data); // 디버깅용
  if (!Array.isArray(res.data)) {
    console.error("응답 데이터가 배열이 아님:", res.data);
    return [];
  }
  return res.data;
};

export { getAnswers };
