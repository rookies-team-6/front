import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAnswers } from "@shared/Apis/listform";
import { postBookmark, deleteBookmark } from "@shared/Apis/bookmark";
import useTeamStore from "@shared/zustand/teamStore";

interface Answer {
  id: number;
  title: string;
  content: string;
  date: string;
  score: number;
}

interface ListProps {
  title: string; // "내 점수", "조별 평균 점수"
  url: string;
}

const truncateText = (text: string) =>
  text.length > 10 ? `${text.slice(0, 10)}...` : text;

const List: React.FC<ListProps> = ({ title, url }) => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]); // 북마크 상태

  const {teamDict} = useTeamStore();

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const data = await getAnswers(teamDict.url);
        if (!Array.isArray(data)) {
          console.error("❗️응답이 배열이 아닙니다:", data);
          setAnswers([]);
        } else {
          setAnswers(data);
        }
      } catch (error) {
        console.error("❗️데이터 요청 실패:", error);
        setAnswers([]);
      }
    };

    fetchAnswers();
  }, []); // ✅ title도 의존성 배열에 추가

const toggleBookmark = async (id: number) => {
  try {
    if (bookmarkedIds.includes(id)) {
      // ✅ 북마크 취소
      await deleteBookmark(id); // 👈 이거 추가
      setBookmarkedIds(prev => prev.filter(item => item !== id));
    } else {
      // ✅ 북마크 추가
      await postBookmark(id);
      setBookmarkedIds(prev => [...prev, id]);
    }
  } catch (error) {
    console.error("❗ 북마크 요청 실패:", error);
  }
};

  return (
    <>
      {answers.map((answer) => (
        <ListButton key={answer.id}>
          <AnswerDate>{answer.date}</AnswerDate>
          <AnswerContent>{truncateText(answer.content)}</AnswerContent>
          <AnswerScore>
            {title}: {answer.score}
          </AnswerScore>

          {/* ✅ 북마크 버튼 */}
          {title === "내 점수" && (
            <BookmarkButton
              $active={bookmarkedIds.includes(answer.id)}
              onClick={() => toggleBookmark(answer.id)}
            >
              {bookmarkedIds.includes(answer.id) ? "★" : "☆"}
            </BookmarkButton>
          )}
        </ListButton>
      ))}
    </>
  );
};

// ✅ 스타일 정의
const ListButton = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 12px 14px 20px 14px;
  margin: 6px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
  border: 1px solid #ddd;
`;

const AnswerDate = styled.span`
  font-size: 9px;
  color: gray;
  margin-bottom: 6px;
`;

const AnswerContent = styled.span`
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;

const AnswerScore = styled.span`
  position: absolute;
  right: 14px;
  bottom: 8px;
  font-size: 10px;
  color: black;
`;

const BookmarkButton = styled.button<{ $active: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "red" : "black")};
`;

export default List;
