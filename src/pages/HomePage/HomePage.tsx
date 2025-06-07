import React, { useEffect, useState } from "react";
import MainBackground from "@shared/ui/main_background";
import Header from "@widgets/Header/Header";
import ScoreBar from "@widgets/GroupScoreBar/GroupScoreBar";
import QuestionComponent from "@widgets/QuestionComponent/QuestionComponent";
import BulletinBoard from "@widgets/BulletinBoard/BulletinBoard";
import { getMyQuestion } from "@shared/Apis/answer";
import { useQuestionStore } from "@shared/zustand/question";

type View = "question" | "board" | "none";

const HomePage = () => {
    const [viewState, setViewState] = useState<View>("question");
    const {setQuestion} = useQuestionStore();

    useEffect(() => {
        const fetchData = async () => {
            try{
                const result = await getMyQuestion();
                if(result.data.success){
                    setQuestion(result.data);
                }else{
                    alert(result.data.error.message);
                    setViewState("board");
                }
                
            }catch(err){
                setViewState("board");
            }
        };
        fetchData();
    }, []);

    const viewMap = {
        question: <QuestionComponent />,
        board: <BulletinBoard />,
        none: <p>None</p>,
    };

    const RenderComponent = ({ state }: { view: View }) => {
        return viewMap[state] || <p>None</p>;
    };

    return (
        <MainBackground>
            <Header />
            <ScoreBar />
            <RenderComponent state={viewState} />
        </MainBackground>
    );
};

export default HomePage;
