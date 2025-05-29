import React from "react";
import styled from "styled-components";
import theme from "@app/styles/theme";

interface Props {
  children: React.ReactNode;
}

const MainBackground: React.FC<Props> = ({ children }) => {
  return (
    <BackgroundWrapper>
      <TopBar />
      {children}
      <BottomBar />
    </BackgroundWrapper>
  );
};

export default MainBackground;


const BackgroundWrapper = styled.div`
  background: ${theme.yellow.y100};  // ✅ 크림색 배경 (연노랑)
  height: 1024px;
  position: relative;
  overflow: hidden;
`;

const TopBar = styled.div`
  background: ${theme.orange.o500};  // ✅ 상단 주황 띠
  width: 100%;
  height: 38px;
  position: absolute;
  top: 0;
  left: 0;
`;

const BottomBar = styled.div`
  background: ${theme.orange.o500};  // ✅ 하단 주황 띠
  width: 100%;
  height: 38px;
  position: absolute;
  bottom: 0;
  left: 0;
`;
