import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { getScoreItems } from "@shared/Apis/scorebar";
import type { ScoreItem } from "@shared/Apis/scorebar";


const ScoreBar: React.FC = () => {
  const [scoreList, setScoreList] = useState<ScoreItem[]>([]);
  const scoreContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchScores = async () => {
        const data = await getScoreItems();
        setScoreList(data);
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

  const handleScoreBoxClick = (team: string, score: string) => {
    alert(`${team}의 점수는 ${score}입니다!`);
    // 실제 해당 조의 상세 정보를 보여주는 페이지로 이동
  };

  const handleQueryAll = () => {
    alert("전체 답변 조회 버튼 클릭");
    // 전체 답변을 조회하는 라우터 이동
  };

  return (
    <Wrapper>
      <NavButton onClick={scrollLeft}>‹</NavButton>
      <ScoreContainer ref={scoreContainerRef}>
        {scoreList.length > 0 ? (
          scoreList.map((item, index) => (
            <ScoreBox
              key={index}
              onClick={() => handleScoreBoxClick(item.team, item.score)}
            >
              {item.team} : {item.score}
            </ScoreBox>
          ))
        ) : (
          <ScoreBox as="div">점수 데이터 로딩 중...</ScoreBox>
        )}
      </ScoreContainer>
      <NavButton onClick={scrollRight}>›</NavButton>
      <QueryButton onClick={handleQueryAll}>전체 답변 조회</QueryButton>
    </Wrapper>
  );
};

export default ScoreBar;





const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: calc(12 / 1440 * 100%);
  background-color: white;
  }
`;

const ScoreContainer = styled.div`
  background-color: #ededed;
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
  background-color: #d9d9d9;
  width: 110;
  height: 60px;
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
  padding: 0;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #c0c0c0;
  }
  &:active {
    background-color: #a0a0a0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const NavButton = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
  padding: 0 5px;
  flex-shrink: 0;
`;

const QueryButton = styled.button`
  background-color: #d9d9d9;
  border: none;
  border-radius: 10px;
  padding: 14px 24px;
  font-size: 16px;
  cursor: pointer;
  margin-left: calc(20 / 1440 * 100%);
  color: #000000;
  flex-shrink: 0;
  }
`;