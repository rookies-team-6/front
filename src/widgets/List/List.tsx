import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    fetchQuestions,
    fetchBookmarkedAnswers,
    fetchTotalAnswers,
    fetchGroupAnswers,
    fetchUpdateAnswers,
} from "@shared/Apis/listform";
import { toggleBookmark } from "@shared/Apis/bookmark";

import useBookmarkStore from "@shared/zustand/bookmarkStore";
import useHomeStore from "@shared/zustand/useHomeStore";

import Loading from "@widgets/Loading/Loading";
import { useNavigate } from "react-router-dom";
import theme from "@app/styles/theme";
import type { Dict } from "styled-components/dist/types";

interface Answer {
    id: number;
    gptAnswer: string;
    question: Dict;
    userAnswer: string;
}

interface Total {
    id: number;
    title: string;
    summary: string;
    questionId: number;
    groupNum: number;
}

interface Bookmark {
    id: number;
    userAnswer?: string;
    gptAnswer: string;
    question: Dict;
    userId: number;
    bookMarked: boolean;
}

interface Team {
    id: number;
    title: string;
    summary: string;
    questionId: number;
    groupNum: number;
}

interface ListProps {
    type: "my" | "team" | "bookmark" | "total";
}

const truncateText = (text?: string) =>
    text && text.length > 10 ? `${text.slice(0, 10)}...` : text ?? "";

const List: React.FC<ListProps> = ({ type }) => {
    const [questions, setQuestions] = useState<Answer[]>([]);
    const [totals, setTotals] = useState<Total[]>([]);
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
    const [teams, setTeams] = useState<Team[]>([]);

    const [isLoading, setLoading] = useState(false);

    const { selectedGroupNum } = useHomeStore();

    const {
        bookmarkedIds,
        setBookmarkedIds,
        toggleBookmark: toggleBookmarkState,
    } = useBookmarkStore();

    const isMy = type === "my";
    const isTeam = type === "team";
    const isTotal = type === "total";
    const isBookmark = type === "bookmark";

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                if (isMy) {
                    setTimeout(async () => {
                        const result = await fetchQuestions();

                        if (result.success) {
                            setQuestions(result.data);
                        } else {
                            alert(
                                "내답변을 가져오는데 문제가 생겼습니다 " +
                                    result.error.message
                            );
                        }
                    }, 500);
                }

                if (isTotal) {
                    setTimeout(async () => {
                        const result = await fetchTotalAnswers();
                        if (result.success) {
                            setTotals(result.data);
                        } else {
                            alert("전체답변을 가져오는데 문제가 생겼습니다 ");
                        }
                    }, 500);
                }

                if (isTeam) {
                    setTimeout(async () => {
                        const groqResult = await fetchUpdateAnswers();
                        if (groqResult.success) {
                            const result = await fetchGroupAnswers(
                                selectedGroupNum
                            );
                            if (result.success) {
                                setTeams(result.data);
                            } else {
                                alert(
                                    "조별답변을 가져오는데 문제가 생겼습니다 " +
                                        result.error.message
                                );
                            }
                        } else {
                            alert(
                                "처리하는데 문제가 생겼습니다: " +
                                    groqResult.error.message
                            );
                        }
                    }, 500);
                }

                if (isBookmark) {
                    setTimeout(async () => {
                        const result = await fetchBookmarkedAnswers();
                        if (result.success) {
                            const bookmarked = result.data;
                            console.log(bookmarked);
                            setBookmarks(bookmarked);
                            setBookmarkedIds(bookmarked.map((q) => q.id));
                        } else {
                            alert(
                                "북마크를 가져오는데 문제가 생겼습니다 " +
                                    result.error.message
                            );
                        }
                    }, 500);
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
            const isBookmark = await toggleBookmark(id);
            if (isBookmark) {
                toggleBookmarkState(id);
            }
        } catch (e) {
            console.error("북마크 토글 실패", e);
        }
    };

    //타입별로 리스트를 출력시켜주는 고마운놈
    const TypeDistinction = () => {
        if (isMy) {
            return (
                <>
                    {questions.map((q) => (
                        <ListButton
                            key={q.id}
                            onClick={() =>
                                navigate("/answerdetail", {
                                    state: {
                                        title: q.question.question,
                                        content: q.userAnswer,
                                    },
                                })
                            }
                        >
                            <ContentRow>
                                <AnswerContent>
                                    {truncateText(q.question.question)}
                                </AnswerContent>
                                <BookmarkButton
                                    $active={bookmarkedIds.includes(q.id)}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleBookmark(q.question.id);
                                    }}
                                >
                                    {bookmarkedIds.includes(q.id) ? "★" : "☆"}
                                </BookmarkButton>
                            </ContentRow>
                        </ListButton>
                    ))}
                </>
            );
        } else if (isTotal) {
            return (
                <>
                    {totals.map((q) => (
                        <ListButton
                            key={q.id}
                            onClick={() =>
                                navigate("/answerdetail", {
                                    state: {
                                        title: q.title,
                                        content: q.summary,
                                    },
                                })
                            }
                        >
                            <ContentRow>
                                <AnswerContent>
                                    {truncateText(q.title)}
                                </AnswerContent>
                            </ContentRow>
                        </ListButton>
                    ))}
                </>
            );
        } else if (isTeam) {
            return (
                <>
                    {teams.map((q) => (
                        <ListButton
                            key={q.id}
                            onClick={() =>
                                navigate("/answerdetail", {
                                    state: {
                                        title: q.title,
                                        content: q.summary,
                                    },
                                })
                            }
                        >
                            <ContentRow>
                                <AnswerContent>
                                    {truncateText(q.title)}
                                </AnswerContent>
                            </ContentRow>
                        </ListButton>
                    ))}
                </>
            );
        } else if (isBookmark) {
            return (
                <>
                    {bookmarks.map((q) => (
                        <ListButton
                            key={q.id}
                            onClick={() =>
                                navigate("/answerdetail", {
                                    state: {
                                        title: q.question.question,
                                        content: q.userAnswer,
                                    },
                                })
                            }
                        >
                            <ContentRow>
                                <AnswerContent>
                                    {truncateText(q.question.question)}
                                </AnswerContent>
                            </ContentRow>
                        </ListButton>
                    ))}
                </>
            );
        }
    };

    if (isLoading) return <Loading />;

    return (
        <>
            {isMy && <Title>내 답변</Title>}
            {isTeam && <Title>{selectedGroupNum}조 답변</Title>}
            {isBookmark && <Title>북마크</Title>}
            {isTotal && <Title>전체답변조회</Title>}

            <ListWrapper>
                <TypeDistinction />
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
