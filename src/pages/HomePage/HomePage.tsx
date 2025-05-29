import React from "react";
import MainBackground from "@shared/ui/main_background";
import Header from "@widgets/Header/Header";
import ScoreBar from "@widgets/GroupScoreBar/GroupScoreBar";
import QuestionComponent from "@widgets/QuestionComponent/QuestionComponent";


const HomePage = () => {

    return(
        <MainBackground>
            <Header />
            <ScoreBar/>
            <QuestionComponent/>
        </MainBackground>
    )

}

export default HomePage;