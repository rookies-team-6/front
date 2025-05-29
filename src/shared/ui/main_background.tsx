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
      <ContentWrapper>{children}</ContentWrapper>
      <BottomBar />
    </BackgroundWrapper>
  );
};

const BackgroundWrapper = styled.div`
  background: ${theme.yellow.y100};
  height: 1024px;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 38px;   // TopBar 높이만큼 여백
  padding-bottom: 38px; // BottomBar 높이만큼 여백
  height: calc(100% - 76px);
  box-sizing: border-box;
`;

const TopBar = styled.div`
  background: ${theme.orange.o500};
  width: 100%;
  height: 38px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

const BottomBar = styled.div`
  background: ${theme.orange.o500};
  width: 100%;
  height: 38px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
`;



export default MainBackground;