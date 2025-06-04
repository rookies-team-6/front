import { devServerInstance } from "@shared/apiInstance";

/**
 * 북마크 등록 API (POST)
 * @param answerId 북마크할 답변의 ID
 */
const postBookmark = async (answerId: number) => {
  const res = await devServerInstance.post("/api/record/bookmarked", {
    answerId,
  });
  return res.data;
};

/**
 * 북마크 취소 API (DELETE)
 * @param answerId 취소할 북마크의 답변 ID
 */
const deleteBookmark = async (answerId: number) => {
  const res = await devServerInstance.delete(`/api/record/bookmarked/${answerId}`);
  return res.data;
};

export { postBookmark, deleteBookmark };
