import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from "react-router-dom";

interface LocationState {
  initialTitle?: string;
  initialContent?: string;
}

const BoardRegistration: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState || {};

  const [title, setTitle] = useState(state.initialTitle || '');
  const [content, setContent] = useState(state.initialContent || '');

  const isEditMode = !!(state.initialTitle || state.initialContent);

  const handleRegister = () => {
    if (isEditMode) {
      // 여기는 수정하는 부분
      alert('수정 되었습니다.');
    } else {
      // 여기는 등록하는 부분
      alert('등록 되었습니다.');
    }
    navigate("/home");
  };

  const handleDelete = () => {
    //여기에는 삭제하는 부분을 추가하기
    alert('삭제 되었습니다.');
    navigate("/home");
  };

  const handleBackToList = () => {
    navigate("/home");
  };

  return (
    <Container>
      <TitleRow>
        <TitleInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        />
        <ButtonGroup>
          <Button onClick={handleRegister}>{isEditMode ? "수정" : "등록"}</Button>
          {isEditMode && (
            <Button onClick={handleDelete} variant="danger">
              삭제
            </Button>
          )}
        </ButtonGroup>
      </TitleRow>
      <ContentInput
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 입력하세요"
      />
      <BackButton onClick={handleBackToList}>목록으로 돌아가기</BackButton>
    </Container>
  );
};

export default BoardRegistration;


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

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const TitleInput = styled.input`
  flex: 1;
  padding: 12px;
  font-size: 1.25rem;
  font-weight: 600;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const ContentInput = styled.textarea`
  width: 100%;
  height: 240px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: none;
  margin-top: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-bottom: 4px;
`;

const Button = styled.button<{ variant?: 'primary' | 'danger' }>`
  padding: 12px 16px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  cursor: pointer;

  background-color: ${({ variant }) =>
    variant === 'danger' ? '#f8d7da' : '#fff3cd'};
  color: #333;

  &:hover {
    background-color: ${({ variant }) =>
      variant === 'danger' ? '#f5c6cb' : '#ffeeba'};
  }
`;

const BackButton = styled.button`
  margin: 10px;
  font-size: 14px;
  color: #666;
  text-decoration: underline;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;

  &:hover {
    color: #333;
  }
`;