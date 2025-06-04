import React from "react";
import MainBackground from "@shared/ui/main_background";
import Header from "@widgets/Header/Header";
import ScoreBar from "@widgets/GroupScoreBar/GroupScoreBar";
import BoardRegistration from "@widgets/BoardRegistration/BoardRegistration";


const BoardRegistrationPage = () => {

    return(
        <MainBackground>
            <Header />
            <ScoreBar/>
            <BoardRegistration />
        </MainBackground>
    )

}

export default BoardRegistrationPage;