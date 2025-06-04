import React from "react";
import MainBackground from "@shared/ui/main_background";
import Header from "@widgets/Header/Header";
import ScoreBar from "@widgets/GroupScoreBar/GroupScoreBar";
import PostDetail from "@widgets/PostDetail/PostDetail";
import { useParams } from "react-router-dom";

const BoardDetailPage = () => {

    const { postId } = useParams(); // URL에서 id 값을 가져옴

    return(
        <MainBackground>
            <Header />
            <ScoreBar/>
            <PostDetail postId={postId}/>
        </MainBackground>
    )

}

export default BoardDetailPage;