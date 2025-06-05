import { devServerInstance } from "@shared/apiInstance";

export const toggleBookmark = async (id: number): Promise<boolean> => {
  try {
    const res = await devServerInstance.post("/api/record/bookmarked", { id });
    return res.data?.data?.bookMarked ?? false;
  } catch (error) {
    console.error("북마크 요청 실패:", error);
    return false;
  }
};