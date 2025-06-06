import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import theme from "@app/styles/theme";


const PostDetail: React.FC = ({ postId }) => {
  const [content, setContent] = useState("이 편지는 인도");
  const [title, setTitle] = useState("테스트 제목");
  const navigate = useNavigate()

  const handleEditToggle = () => {
    navigate(`/modify/${postId}`,{
      state: {
        title: title,
        content: content,
      },
    })
  };

  const onClickBack = () => {
    navigate("/home")
  }

  useEffect(()=>{
    console.log(postId)
  },[])

  return (
    <Container>
      <Title>{title}</Title>
      <EditButton onClick={handleEditToggle}>수정</EditButton>
      <TextArea 
        value={content} 
        onChange={e => setContent(e.target.value)}
        readOnly={true}
      />
      <BackLink onClick={onClickBack}>목록으로 돌아가기</BackLink>
    </Container>
  );
};


const Container = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 2rem auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: left;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 30px;
`;

const EditButton = styled.button`
  background-color: #FFDEA8;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
  padding: 8px 14px;
  font-size: 16px;
  float: right;
  cursor: pointer;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  border: 2px solid #3b82f6;
  padding: 16px;
  font-size: 16px;
  box-sizing: border-box;
`;

const BackLink = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #111827;
  cursor: pointer;
  text-decoration: underline;
`;

export default PostDetail;
