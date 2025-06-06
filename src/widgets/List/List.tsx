import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    fetchQuestions,
    fetchMyScores,
    fetchDeptAverages,
    fetchBookmarkedAnswers,
} from "@shared/Apis/listform";

import { toggleBookmark } from "@/shared/Apis/bookmark";
import useTeamStore from "@shared/zustand/teamStore";
import Loading from "@widgets/Loading/Loading";
import useBookmarkStore from "@shared/zustand/bookmarkStore";
import { useNavigate } from "react-router-dom";
interface Answer {
    id: number;
    title: string;
    content: string;
    date: string;
    score: number;
}

interface ScoreData {
    questionId: number;
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
    const { teamDict } = useTeamStore();
    const teamId = teamDict.team;
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
                if (isMy || isTeam) {
                    const fetchedQuestions = await fetchQuestions();
                    setQuestions(fetchedQuestions);

                    if (isMy) {
                        const myScores = await fetchMyScores();
                        const mapped = myScores.reduce(
                            (acc: { [id: number]: number }, cur: ScoreData) => {
                                acc[cur.questionId] = cur.score;
                                return acc;
                            },
                            {}
                        );
                        setScoreDict(mapped);
                    }

                    if (isTeam) {
                        const deptScores = await fetchDeptAverages();
                        const mapped = deptScores.reduce(
                            (acc: { [id: number]: number }, cur: ScoreData) => {
                                acc[cur.questionId] = cur.score;
                                return acc;
                            },
                            {}
                        );
                        setScoreDict(mapped);
                    }
                } else if (isBookmark) {
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
            toggleBookmarkState(id); // zustand 상태 토글
        } catch (e) {
            console.error("북마크 토글 실패", e);
        }
    };
    if (isLoading) return <Loading />;

    return (
        <>
            {isMy && <Title>내 답변</Title>}
            {isTeam && <Title>{teamId}조 답변</Title>}
            {isBookmark && <Title>북마크</Title>}

            <ListWrapper>
                {questions.map((q) => (
                    <ListButton
                        key={q.id}
                        onClick={() => navigate("/answerdetail")}
                    >
                        <AnswerDate>{q.date}</AnswerDate>

                        <ContentRow>
                            <AnswerContent>
                                {truncateText(q.title)}
                            </AnswerContent>
                            {isMy && (
                                <BookmarkButton
                                    $active={bookmarkedIds.includes(q.id)}
                                    onClick={(e) => {
                                        e.stopPropagation(); // 북마크 클릭 시 상세 이동 막기
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
                                : isTeam
                                ? `조별 평균 점수: ${scoreDict[q.id] ?? "-"}`
                                : `점수: ${q.score}`}
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
    background-color: white;
    border-radius: 10px;
    padding: 8px 14px 8px 14px;
    margin: 8px 0;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    border: 1px solid #ddd;
    &:hover {
        background-color: #ededed;
    }
`;

const AnswerDate = styled.div`
    font-size: 9px;
    color: gray;
    margin-bottom: 6px;
    // border: 1px solid red; // 시각 확인용
`;

const ContentRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25px;
    padding: 2px 0;
    // border: 1px solid brown; // 시각 확인용
`;

const AnswerContent = styled.div`
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    // border: 1px solid red; // 시각 확인용
`;

const BookmarkButton = styled.button<{ $active: boolean }>`
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    color: ${({ $active }) => ($active ? "red" : "black")};
    // border: 1px solid red; // 시각 확인용
`;

const AnswerScore = styled.div`
    font-size: 10px;
    text-align: right;
    color: black;
    margin-top: 6px;
    // border: 1px solid red; // 시각 확인용
`;

const ListWrapper = styled.div`
    width: 100%;
    overflow-y: auto;
    padding-right: 6px;

    /* 스크롤바 스타일 */
    scrollbar-width: thin;
    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 4px;
    }
`;

export default List;
