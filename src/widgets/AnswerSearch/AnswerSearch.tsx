import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getAnswerData, getQuestionData } from "@shared/Apis/answer";
import Loading from "@widgets/Loading/Loading";

const AnswerSearch: React.FC = () => {
  const [answer, setAnswer] = useState("");
  const [questionTitle, setQuestionTitle] = useState("")
  const [isLoading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    const fetchData = async () => {
      const resultQuestion = await getQuestionData(1);
      // console.log(resultQuestion)
      setQuestionTitle(resultQuestion.data.title)
    };

    fetchData();
    setLoading(false)
  },[])

  useEffect(()=>{
    const fetchData = async () => {
      const resultAnswer = await getAnswerData(1);
      // console.log(resultQuestion)
      setAnswer(resultAnswer.data.content)
    };

    fetchData();
  },[])

  return (
    <Wrapper>
      {
        isLoading ? 
        <Loading />
        :
        <>
          <Title>{questionTitle}</Title>
          <QuestionBox>
            {answer}
          </QuestionBox>
        </>
      }
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

export default AnswerSearch;
