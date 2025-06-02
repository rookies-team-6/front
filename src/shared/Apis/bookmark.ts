import { devServerInstance } from "@shared/apiInstance";

/**
 * 북마크 등록 API
 * @param answerId 북마크할 답변의 ID
 */
const postBookmark = async (answerId: number) => {
  const res = await devServerInstance.post("/api/record/bookmarked", {
    answerId,
  });
  return res.data;
};

export { postBookmark}