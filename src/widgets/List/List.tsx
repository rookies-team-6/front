import React, { useEffect } from "react";
import styled from "styled-components";
import useListRegisterStore from "@shared/zustand/listRegisterStore";
import { getAnswers } from "@shared/Apis/listform";

interface ListProps {
    isGroup?: boolean;
}

const truncateText = (text: string) =>
    text.length > 10 ? `${text.slice(0, 10)}...` : text;

const List: React.FC<ListProps> = ({ isGroup = false }) => {
    const { answers, setAnswers } = useListRegisterStore();

    useEffect(() => {
        const fetchAnswers = async () => {
        const data = await getAnswers();
        console.log(data);
        setAnswers(data); // 모든 질문 데이터를 스토어에 저장
        };
        fetchAnswers();
    }, [setAnswers]);

    return (
        <>
        {answers.map((answer) => (
            <ListButton key={answer.id}>
            <AnswerDate>{answer.date}</AnswerDate>
            <AnswerContent>{truncateText(answer.content)}</AnswerContent>
            <AnswerScore>
                {isGroup ? "조별 평균 점수" : "내 점수"}: {answer.score}
            </AnswerScore>
            </ListButton>
        ))}
        </>
    );
};
// 스타일
const ListButton = styled.div`
    cursor: pointer;
    position: relative; /* ✅ 기준 잡기 */
    width: 100%;
    background-color: white;
    border-radius: 10px;
    padding: 12px 14px 20px 14px; /* ✅ 아래 padding 추가 */
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
    position: absolute; /* ✅ 오른쪽 하단 고정 */
    right: 14px;
    bottom: 8px;
    font-size: 10px;
    color: black;
`;

export default List;