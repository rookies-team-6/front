import MainBackground from "@shared/ui/main_background";
import Header from "@widgets/Header/Header";
import ScoreBar from "@widgets/GroupScoreBar/GroupScoreBar";
import AnswerSearch from "@widgets/AnswerSearch/AnswerSearch";

const AnswerDetailPage = () => {
    // navigate될 때 조 번호 넘겨주
    // /group/
    return (
        <MainBackground>
            <Header />
            <ScoreBar />
            <AnswerSearch  />
        </MainBackground>
    );
};

export default AnswerDetailPage;
