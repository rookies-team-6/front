import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { postAnswerData, getQuestionData } from "@shared/Apis/home";



const QuestionComponent: React.FC = () => {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("")
  const [questionTitle, setQuestionTitle] = useState("")

  useEffect(()=>{
    const fetchData = async () => {
      const resultQuestion = await getQuestionData(1);
      // console.log(resultQuestion)
      setQuestionTitle(resultQuestion.data.title)
      setQuestion(resultQuestion.data.content)
    };

    fetchData();
  },[])

  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = ref.current;
    if (textarea) {
      textarea.style.height = 'auto'; // 높이 초기화
      textarea.style.height = `${textarea.scrollHeight}px`; // scrollHeight 만큼 늘림
    }
  }, [answer]);


  
  //제출 버튼 누를경우
  const handleSubmit = () => {
    postAnswerData(answer)
    setAnswer("");
  };

  
  //키보드 이벤트
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      //enter를 칠 경우
    if(e.key === 'Enter' && !e.shiftKey){
      e.preventDefault(); //줄바꿈 막기
      handleSubmit();
    }
  }


  return (
    <Wrapper>
      <Title>{questionTitle}</Title>
      <QuestionBox>
        {question}
      </QuestionBox>
      <AnswerWrapper>
        {/* <Arrow>↳</Arrow> */}
        <Input
            ref={ref}
            placeholder="답변 입력"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={handleKeyDown}
        />
        <SubmitButton onClick={handleSubmit}>제출</SubmitButton>
      </AnswerWrapper>
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

const AnswerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

// const Arrow = styled.span`
//   font-size: 1.5rem;
// `;

const Input = styled.textarea`
  width: 100%;
  padding: 0.8rem 3.5rem 0.8rem 0.8rem;
  background-color: #ffe0b2;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5;
  resize: none;
  overflow: hidden;
`;

const SubmitButton = styled.button`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  background-color: #ff8a80;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border-radius: 6px;
  cursor: pointer;
  z-index: 1;
  transition: background 0.2s ease;

  &:hover {
    background-color: #ff6e66;
  }
`;

export default QuestionComponent;
