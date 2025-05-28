import React, { useState } from "react";
import styled from "styled-components";
import { postQuestionData } from "@shared/Apis/home";



const QuestionComponent: React.FC = () => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    postQuestionData(answer)
    setAnswer("");
  };

  return (
    <Wrapper>
      <Title>질문 주제</Title>
      <QuestionBox>
        <div>질문내용</div>
        <div>질문세부내용</div>
      </QuestionBox>
      <AnswerWrapper>
        <Arrow>↳</Arrow>
        <Input
            type="text"
            placeholder="답변 입력"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
        />
        <SubmitButton onClick={handleSubmit}>제출</SubmitButton>
      </AnswerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: left;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;

const QuestionBox = styled.div`
  background-color: #fffcee;
  padding: 1.5rem;
  border-radius: 6px;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

const AnswerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Arrow = styled.span`
  font-size: 1.5rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.8rem;
  background-color: #ffe0b2;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #ff8a80;
  color: white;
  border: none;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #ff6e66;
  }
`;

export default QuestionComponent;
