import React from "react";
import MainBackground from "@shared/ui/main_background";
import Header from "@widgets/Header/Header";
import ScoreBar from "@widgets/GroupScoreBar/GroupScoreBar";
import List from "@widgets/List/List";
import styled from "styled-components";

const MyAnswerPage = () => {
    return (
        <MainBackground>
            <Header />
            <ScoreBar />
            <ContentWrapper>
                <Title>내 답변</Title>
                <ScrollArea>
                    <List isGroup={false} /> {/* ✅ 내 점수용 */}
                </ScrollArea>
            </ContentWrapper>
        </MainBackground>
    );
};

export default MyAnswerPage;

// ✅ 스타일 정의
const ContentWrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const ScrollArea = styled.div`
    max-height: 300px;
    overflow-y: auto;
    padding-right: 40px;
    padding-left: 40px;
`;
