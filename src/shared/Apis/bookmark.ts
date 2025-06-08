import { serverInstance } from "@shared/apiInstance";

// 북마크 상태 토글 요청
export const toggleBookmark = async (id: number): Promise<boolean> => {
  try {
    const res = await serverInstance.post("/api/record/bookmarked", { 
      questionId: id
    });
    return res.data?.data?.bookMarked ?? false;
  } catch (error) {
    console.error("북마크 요청 실패:", error);
    return false;
  }
};
