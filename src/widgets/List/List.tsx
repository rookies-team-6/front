import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  fetchQuestions,
  fetchBookmarkedAnswers,
  fetchHomeInfo,
} from "@shared/Apis/listform";
import { toggleBookmark } from "@shared/Apis/bookmark";

import useBookmarkStore from "@shared/zustand/bookmarkStore";
import useHomeStore from "@shared/zustand/useHomeStore";

import Loading from "@widgets/Loading/Loading";
import { useNavigate } from "react-router-dom";
import theme from "@app/styles/theme";

interface Answer {
  id: number;
  title: string;
  content: string;
  date: string;
  score: number;
}

interface ListProps {
  type: "my" | "team" | "bookmark";
}

const truncateText = (text?: string) =>
  text && text.length > 10 ? `${text.slice(0, 10)}...` : text ?? "";

const List: React.FC<ListProps> = ({ type }) => {
  const [questions, setQuestions] = useState<Answer[]>([]);
  const [scoreDict, setScoreDict] = useState<{ [id: number]: number }>({});
  const [isLoading, setLoading] = useState(false);

  const { selectedGroupNum, setUser } = useHomeStore();

  const {
    bookmarkedIds,
    setBookmarkedIds,
    toggleBookmark: toggleBookmarkState,
  } = useBookmarkStore();

  const isMy = type === "my";
  const isTeam = type === "team";
  const isBookmark = type === "bookmark";

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedQuestions = await fetchQuestions();
        setQuestions(fetchedQuestions);

        if (isMy) {
          const homeData = await fetchHomeInfo();
          const user = homeData.data.user;

          setUser(user);

          const mapped = fetchedQuestions.reduce(
            (acc: { [id: number]: number }, q) => {
              acc[q.id] = user.personalScore ?? 0;
              return acc;
            },
            {}
          );

          setScoreDict(mapped);
        }

        if (isBookmark) {
          const bookmarked = await fetchBookmarkedAnswers();
          setQuestions(bookmarked);
          setBookmarkedIds(bookmarked.map((q) => q.id));
        }
      } catch (e) {
        console.error("데이터 로딩 실패", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleBookmark = async (id: number) => {
    try {
      await toggleBookmark(id);
      toggleBookmarkState(id);
    } catch (e) {
      console.error("북마크 토글 실패", e);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <>
      {isMy && <Title>내 답변</Title>}
      {isTeam && <Title>{selectedGroupNum}조 답변</Title>}
      {isBookmark && <Title>북마크</Title>}

      <ListWrapper>
        {questions.map((q) => (
          <ListButton key={q.id} onClick={() => navigate("/answerdetail")}>
            <AnswerDate>{q.date}</AnswerDate>

            <ContentRow>
              <AnswerContent>{truncateText(q.title)}</AnswerContent>
              {isMy && (
                <BookmarkButton
                  $active={bookmarkedIds.includes(q.id)}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookmark(q.id);
                  }}
                >
                  {bookmarkedIds.includes(q.id) ? "★" : "☆"}
                </BookmarkButton>
              )}
            </ContentRow>

            <AnswerScore>
              {isMy
                ? `내 점수: ${scoreDict[q.id] ?? "-"}`
                : isBookmark
                ? `점수: ${q.score}`
                : null}
            </AnswerScore>
          </ListButton>
        ))}
      </ListWrapper>
    </>
  );
};

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ListButton = styled.div`
  cursor: pointer;
  width: 100%;
  background-color: ${theme.white.w500};
  border-radius: 10px;
  padding: 8px 14px;
  margin: 8px 0;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  border: 1px solid ${theme.gray.g300};
  &:hover {
    background-color: #ededed;
  }
`;

const AnswerDate = styled.div`
  font-size: 9px;
  color: ${theme.gray.g500};
  margin-bottom: 6px;
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  padding: 2px 0;
`;

const AnswerContent = styled.div`
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;

const BookmarkButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "red" : "black")};
`;

const AnswerScore = styled.div`
  font-size: 10px;
  text-align: right;
  color: ${theme.black.b500};
  margin-top: 6px;
  min-height: 14px;
`;

const ListWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  padding-right: 6px;

  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.gray.g300};
    border-radius: 4px;
  }
`;

export default List;
