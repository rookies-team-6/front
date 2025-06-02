import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAnswers } from "@shared/Apis/listform";
import { postBookmark } from "@shared/Apis/bookmark";

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

    useEffect(() => {
        const fetchAnswers = async () => {
        const data = await getAnswers(url);
        setAnswers(data);
        };
        fetchAnswers();
    }, [url]);

    const toggleBookmark = async (id: number) => {
        try {
            await postBookmark(id); // ✅ 백엔드 POST 호출
            setBookmarkedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) 
            : [...prev, id]
            );
        } catch (error) {
            console.error("북마크 실패:", error);
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

// 스타일 정의 그대로 유지
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
