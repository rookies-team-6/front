import React,{useEffect, useState} from "react";
import MainBackground from "@shared/ui/main_background";
import Header from "@widgets/Header/Header";
import ScoreBar from "@widgets/GroupScoreBar/GroupScoreBar";
import QuestionComponent from "@widgets/QuestionComponent/QuestionComponent";
import BulletinBoard from "@widgets/BulletinBoard/BulletinBoard";

type View = 'question' | 'board' | 'none';

const HomePage = () => {
    const [viewState, setViewState] = useState<View>("question") 

    useEffect(()=>{
        setViewState("board")
    },[])

    const viewMap = {
        "question": <QuestionComponent />,
        "board": <BulletinBoard />, 
        "none": <p>None</p>,
    };

    const RenderComponent = ({state}: { view: View }) => {
        return viewMap[state] || <p>None</p>;
    }

    return(
        <MainBackground>
            <Header />
            <ScoreBar/>
            <RenderComponent state={viewState}/>
        </MainBackground>
    )

}

export default HomePage;