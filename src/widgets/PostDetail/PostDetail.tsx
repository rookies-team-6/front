import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import theme from "@app/styles/theme";
import { getPostDetail } from '@shared/Apis/board';


const PostDetail: React.FC = ({ postId }) => {
  const [content, setContent] = useState("이 편지는 인도");
  const [title, setTitle] = useState("테스트 제목");
  const [isMine, setIsMine] = useState(false);
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
    const getDetailData = async() => {
      const result = await getPostDetail(postId);
      if(result.data.success){
        setContent(result.data.data.title);
        setTitle(result.data.data.contents);
        setIsMine(result.data.data.mine);
      }else{
        alert("게시물을 가져오는데 실패했습니다: "+result.error.message);
        navigate("/home")
      }
    }

    getDetailData();
  },[])

  return (
    <Container>
      <Title>{title}</Title>
      {isMine && <EditButton onClick={handleEditToggle}>수정</EditButton>}
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
