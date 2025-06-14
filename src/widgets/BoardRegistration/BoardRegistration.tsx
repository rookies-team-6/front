import styled from "styled-components";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";
import { postBoardCreate, putBoard, deleteBoard } from "@/shared/Apis/board";

interface LocationState {
  title?: string;
  content?: string;
  id?: string;
}

interface FormValues {
  title: string;
  contents: string;
}

interface Props {
  isEditMode: boolean;
}

const BoardRegistration: React.FC<Props> = ({ isEditMode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = (location.state as LocationState) || {};
  const { postId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: state.title || "",
      contents: state.content || "",
    },
  });

  const onSubmit = async(data: FormValues) => {
    if (isEditMode) {
      const result = await putBoard(postId, data);
      if(result.success){
        alert("수정 되었습니다.");
        navigate("/home");
      }else{
        alert("수정에 문제가 있습니다."+result.data.error.message);
      }
      
    } else {
      const result = await postBoardCreate(data);
      if(result.success){
        alert("등록 되었습니다.");
        navigate("/home");
      }else{
        alert("수정에 문제가 있습니다."+result.error.message);
      }
    }
    navigate("/home");
  };

  const handleDelete = async() => {
    const result = await deleteBoard(postId);
    if(result.success){
      alert("삭제 되었습니다.");
      navigate("/home");
    }else{
      alert("삭제에 문제가 생겼습니다. "+result.error.message);
    }
    
  };

  const handleBackToList = () => {
    navigate("/home");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TitleRow>
          <TitleInput
            {...register("title", { required: "제목을 입력해주세요" })}
            placeholder="제목을 입력하세요"
          />
          <ButtonGroup>
            <Button type="submit">
              {isEditMode ? "수정" : "등록"}
            </Button>
            {isEditMode && (
              <Button type="button" onClick={handleDelete} variant="danger">
                삭제
              </Button>
            )}
          </ButtonGroup>
        </TitleRow>
        {errors.title && <ErrorText>{errors.title.message}</ErrorText>}
        <ContentInput
          {...register("contents", { required: "내용을 입력해주세요" })}
          placeholder="내용을 입력하세요"
        />
        {errors.contents && <ErrorText>{errors.contents.message}</ErrorText>}
      </form>
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
    border-radius: 15px;
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

const Button = styled.button<{ variant?: "primary" | "danger" }>`
    padding: 12px 16px;
    border-radius: 6px;
    border: none;
    font-size: 14px;
    cursor: pointer;

    background-color: ${({ variant }) =>
        variant === "danger" ? "#f8d7da" : "#fff3cd"};
    color: #333;

    &:hover {
        background-color: ${({ variant }) =>
            variant === "danger" ? "#f5c6cb" : "#ffeeba"};
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

const ErrorText = styled.p`
  color: red;
  margin-bottom: 12px;
`;