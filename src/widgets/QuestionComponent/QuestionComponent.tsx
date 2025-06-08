import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { postAnswerData, postGptResult } from "@shared/Apis/answer";
import { useQuestionStore } from "@shared/zustand/question";
import { useNavigate } from "react-router-dom";


const QuestionComponent: React.FC = () => {
  const [answer, setAnswer] = useState("");
  const [isResultAnswer, setResultAnswer] = useState(false); //현재 답변이 완료된 상태인지 체크
  const [gptAnswer, setGptAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [isLoading, setLoading] = useState(false);


  const {question} = useQuestionStore(); // keys: id, question, canSolve
  const navigate = useNavigate();
  

  const ref = useRef<HTMLTextAreaElement>(null);


  useEffect(() => {
    const textarea = ref.current;
    if (textarea) {
      textarea.style.height = 'auto'; // 높이 초기화
      textarea.style.height = `${textarea.scrollHeight}px`; // scrollHeight 만큼 늘림
    }
  }, [answer]);


  
  //제출 버튼 누를경우
  const handleSubmit = async() => {
    if(!isLoading){
      setLoading(true);
      const result = await postAnswerData(question.id, answer)
      console.log(result)
      //제출을 누를경우 답변을 등록만 한다
      if(result.data.success){
        //답변을 gpt에 요청한다 (long term)
        const getGPTResult = await postGptResult()
        if(getGPTResult.data.success){
          const answerData = getGPTResult.data.data
          setGptAnswer(answerData.model_answer);
          setFeedback(answerData.feedback);
          setUserScore(answerData.score);
          //답변출력모드로 전환
          setResultAnswer(true);
        }else{
          alert("gpt의 답변내용을 가져오는데 문제가 발생했습니다 "+result.error.message)
        }
      }else{
        alert("답변을 제출하는데 문제가 발생했습니다 "+result.error.message)
      }
      setAnswer("");
      setLoading(false);
    }

  };

  
  //키보드 이벤트
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      //enter를 칠 경우
    if(e.key === 'Enter' && !e.shiftKey){
      e.preventDefault(); //줄바꿈 막기
      if(isResultAnswer){
        onClickNext();
      }else{
        handleSubmit();
      }
      
    }
  }

  const onClickNext = () => {
    if(!isLoading){
      window.location.reload();
    } 
    
  }

  //답변 출력
  const RenderResponseAnswer = () =>{
    return(
      <Container>
        <LeftSection>
          <Block>
            <ResponseTitle>내 답변</ResponseTitle>
            <Content>{answer}</Content>
          </Block>
          <Block>
            <ResponseTitle>GPT 답변</ResponseTitle>
            <Content>{gptAnswer}</Content>
          </Block>
          <Block>
            <ResponseTitle>피드백</ResponseTitle>
            <Content>{feedback}.</Content>
          </Block>
        </LeftSection>
        <RightTop>
          <Score>점수 {userScore} 점</Score>
        </RightTop>
      </Container>
    )
  }


  return (
    <Wrapper>
      <Title>{question.id}번 문제</Title>
      <QuestionBox>
        {question.question}
      </QuestionBox> 

      {isResultAnswer && <RenderResponseAnswer />}
      
      
      <AnswerWrapper>
        {/* <Arrow>↳</Arrow> */}
        <Input
            ref={ref}
            placeholder="답변 입력"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={handleKeyDown}
        />
        {
          isResultAnswer ? 
          <SubmitButton onClick={onClickNext}>다음문제</SubmitButton>
          : 
          <SubmitButton onClick={handleSubmit}>제출</SubmitButton> 
        }
        
      </AnswerWrapper>
    </Wrapper>
  );
};

const Container = styled.div`
  background-color: #fefbef;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Block = styled.div``;

const ResponseTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Content = styled.p`
  color: #555;
`;

const Score = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
`;

const RightTop = styled.div`
  width: 20%;
  align-self: flex-start;
`;


const Wrapper = styled.div`
  width: 100%;
  max-width: 80%;
  margin:10% auto 0 auto;
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
  margin-bottom: 2rem;
`;

const QuestionBox = styled.div`
  line-height:150%;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 2rem;
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
  padding-right: 8%;
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
