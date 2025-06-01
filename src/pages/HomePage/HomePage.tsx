import React,{useEffect, useState} from "react";
import MainBackground from "@shared/ui/main_background";
import Header from "@widgets/Header/Header";
import ScoreBar from "@widgets/GroupScoreBar/GroupScoreBar";
import QuestionComponent from "@widgets/QuestionComponent/QuestionComponent";

type View = 'question' | 'detail' | 'none';

const HomePage = () => {
    const [viewState, setViewState] = useState<View>("question") //여기를 zustand로 교체할것

    useEffect(()=>{

    },[])

    const viewMap = {
        question: <QuestionComponent />,
        detail: <p>test</p>,
        none: <p>None</p>,
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