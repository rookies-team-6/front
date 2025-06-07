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
                <List type="team" />
            </ContentWrapper>
        </MainBackground>
    );
};

const ContentWrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
`;

export default TeamAnswerPage;
