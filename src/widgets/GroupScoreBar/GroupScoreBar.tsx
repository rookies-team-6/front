import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { fetchHomeInfo } from "@shared/Apis/listform";
import { useNavigate } from "react-router-dom";
import Loading from "@widgets/Loading/Loading";
import useHomeStore from "@shared/zustand/useHomeStore";
import theme from "@app/styles/theme";

interface GroupScore {
    groupNum: number;
    groupScore: number;
}

const ScoreBar: React.FC = () => {
    const [scoreList, setScoreList] = useState<GroupScore[]>([]);
    const scoreContainerRef = useRef<HTMLDivElement>(null);
    const [isLoading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { setSelectedGroupNum } = useHomeStore();

    useEffect(() => {
        const fetchScores = async () => {
            setLoading(true);
            try {
                const res = await fetchHomeInfo();
                const groupScores = res.data.groupScores;
                setScoreList(groupScores);
            } catch (e) {
                console.error("스코어 데이터 불러오기 실패", e);
            } finally {
                setLoading(false);
            }
        };
        fetchScores();
    }, []);

    const scrollAmount = 110 + 53;

    const scrollLeft = () => {
        if (scoreContainerRef.current) {
            scoreContainerRef.current.scrollBy({
                left: -scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scoreContainerRef.current) {
            scoreContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const handleScoreBoxClick = (groupNum: number) => {
        setSelectedGroupNum(groupNum);
        navigate("/teamanswerlist");
    };

    return (
        <Wrapper>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <NavButton onClick={scrollLeft}>‹</NavButton>
                    <ScoreContainer ref={scoreContainerRef}>
                        {scoreList.length > 0 ? (
                            scoreList.map((item, index) => (
                                <ScoreBox
                                    key={index}
                                    onClick={() =>
                                        handleScoreBoxClick(item.groupNum)
                                    }
                                >
                                    {item.groupNum}조 : {item.groupScore}점
                                </ScoreBox>
                            ))
                        ) : (
                            <ScoreBox as="div">점수 데이터 로딩 중...</ScoreBox>
                        )}
                    </ScoreContainer>
                    <NavButton onClick={scrollRight}>›</NavButton>
                </>
            )}
            <QueryButton onClick={() => navigate("/totallist")}>
                전체 답변 조회
            </QueryButton>
        </Wrapper>
    );
};

export default ScoreBar;

const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: calc(12 / 1440 * 100%);
    background-color: ${theme.white.w500};
`;

const ScoreContainer = styled.div`
    background-color: ${theme.gray.g100};
    width: calc(770 / 1440 * 100%);
    height: auto;
    padding: 10px 20px;
    border-radius: 10px;
    display: flex;
    overflow-x: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    flex-shrink: 0;
    flex-wrap: nowrap;
`;

const ScoreBox = styled.button`
    background-color: ${theme.gray.g200};
    width: 110px;
    height: 60px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 16px;
    white-space: nowrap;
    margin-right: calc(53 / 1440 * 100%);
    border: none;
    cursor: pointer;
    font-family: inherit;
    color: inherit;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: ${theme.gray.g400};
    }

    &:active {
        background-color: ;
        ${theme.gray.g500}
    }

    &:last-child {
        margin-right: 0;
    }
`;

const NavButton = styled.button`
    border: none;
    background: none;
    font-size: 45px;
    cursor: pointer;
    padding: 0 5px;
    flex-shrink: 0;
`;

const QueryButton = styled.button`
    background-color: ${theme.gray.g200};
    padding: 10px;
    height: 60px;
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    margin-left: calc(20 / 1440 * 100%);
    color: ${theme.black.b500};
    flex-shrink: 0;

    &:hover {
        background-color: ${theme.gray.g400};
    }
`;
