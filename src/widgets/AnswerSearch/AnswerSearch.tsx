import React from "react";
import styled from "styled-components";
import theme from "@app/styles/theme";
import { useLocation } from "react-router-dom";

interface LocationState {
  title?: string;
  content?: string;
}

const AnswerSearch: React.FC = () => {
  const location = useLocation();
  const state = (location.state as LocationState) || {};


  return (
    <Wrapper>
      <Title>{state.title}</Title>
      <QuestionBox>
        {state.content}
      </QuestionBox>

    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 2rem auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: left;
  box-shadow: ${theme.gray.g100};
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;

const QuestionBox = styled.div`
  background-color:${theme.yellow.y100};
  padding: 1.5rem;
  border-radius: 6px;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

export default AnswerSearch;
