import React from "react";
import MainBackground from "@shared/ui/main_background";
import Header from "@widgets/Header/Header";
import ScoreBar from "@widgets/GroupScoreBar/GroupScoreBar";
import List from "@widgets/List/List";
import styled from "styled-components";

const TeamAnswerPage = () => {
    return (
        <MainBackground>
            <Header />
            <ScoreBar />
            <ContentWrapper>
                <Title>조별 답변</Title>
                <ScrollArea>
                    <List isGroup={true} /> {/* ✅ 조별 평균 점수용 */}
                </ScrollArea>
            </ContentWrapper>
        </MainBackground>
    );
};

export default TeamAnswerPage;

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
