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
                    <List title="조별 평균 점수" url="/api/team-answers" />
                </ScrollArea>
            </ContentWrapper>
        </MainBackground>
    );
};

export default TeamAnswerPage;

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
    max-height: 500px;
    overflow-y: auto;
    padding-right: 40px;
    padding-left: 40px;
`;
