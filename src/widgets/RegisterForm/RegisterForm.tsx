import styled from "styled-components";
import theme from "@app/styles/theme";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegisterData } from "@shared/Apis/auth";
import useRegisterStore from "@shared/zustand/registerStore"

import { RegisterFormSchema } from "@shared/schemas/registerSchema";
import { ZodError } from "zod"; 

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;

const RegisterForm: React.FC = () => {
  const {employeeNumber, employeeName } = useRegisterStore();
  const [email, setEmail] = useState("");
  //여기는 이메일 중복확인 관련해서 추가하기
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  //회원가입 버튼 비활성화 관련
  // const isRegisterButtonDisabled =
  //   !employeeName || !employeeNumber || !emailVerified || !password || password !== passwordConfirm;

  const navigate = useNavigate();

  // 이메일 인증 코드 전송 관련(수정필요) -> 이제 여기를 중복확인 관련으로 바꾸기
  // const handleSendEmailCode = async () => {
  //   try {
  //     const response = await requestEmailVerification(email); // 서버에 이메일 인증 요청
  //     console.log("이메일 인증 요청 성공:", response);
  //     alert("이메일로 인증 코드가 전송되었습니다.");
  //     setEmailSent(true);
  //   } catch (error) {
  //     console.error("이메일 인증 코드 전송 실패:", error);
  //     alert("인증 코드 전송에 실패했습니다. 올바른 이메일 주소인지 확인해주세요.");
  //   }
  // };



  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      RegisterFormSchema.parse({
        email,
        password,
        passwordConfirm,
      });

      const response = await postRegisterData({ email, password, passwordConfirm });
      console.log("회원가입 성공:", response);
      alert("회원가입에 성공했습니다!");
      navigate("/", { replace: true });
    } catch (err) {
      if (err instanceof ZodError) {
        const fieldErrors: Record<string, string> = {};
        err.errors.forEach((error) => {
          if (error.path) {
            fieldErrors[error.path[0]] = error.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        console.error(err);
      }
    }
  };

  const handleLogin = () => {
        navigate("/");
    };

  return (
    <Container>
      <Title>회원가입</Title>
      <Form>
        <Label>이름</Label>
        <Input type="text" value={employeeName} readOnly/>
        <Label>사원 번호</Label>
        <Input type="text" value={employeeNumber} readOnly/>

        <Label htmlFor="email">이메일</Label>
        <InputWrapper>
        <Input
          type="email"
          placeholder="올바른 이메일 형식으로 입력해주세요. 예: user@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // 여기는 중복 확인 관련으로 disabled? 뭐 이런 거 하면 되지 않을까요 아닌가... 하여튼
        />
          <SubmitButton type="button"  disabled={!email || !emailRegex.test(email)}>
            중복확인
          </SubmitButton>
        </InputWrapper>
        {errors.email && <p style={{ color: "red", marginBottom: "12px" }}>{errors.email}</p>}
        <Label htmlFor="password">비밀번호</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: "red", marginBottom: "12px" }}>{errors.password}</p>}
        <Label htmlFor="passwordConfirm">비밀번호 확인</Label>
        <Input
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        {errors.passwordConfirm && (
          <p style={{ color: "red", marginBottom: "12px" }}>{errors.passwordConfirm}</p>
        )}
        <Button type="submit" onClick={handleRegister}
        //이거는 비활성화 관련
        // disabled={isRegisterButtonDisabled}
        >Sign up</Button>
      </Form>
      <RegisterButton onClick={handleLogin}>
            로그인으로 돌아가기
      </RegisterButton>
    </Container>
  );
};



const Container = styled.div`
  width: 57.22%;
  height: 80.47%;
  margin: auto;
  background-color: #fffcee;
`;

const Title = styled.h2`
  font-size: 48px;
  margin-bottom: 40px;
  color: #000000;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  margin-top: 12px;
  font-size: 16px;
  color: #000000;
`;

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 8px;
  border: 1px solid #999999;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;

  &:read-only {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const Button = styled.button<{ disabled?: boolean }>`
  padding: 10px 0;
  margin-top: 12px;
  font-size: 16px;
  color: #ffffff;
  background-color: ${(props) => (props.disabled ? "#c4c4c4" : theme.orange.o500)};
  border: none;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const RegisterButton = styled.button`
    display: block;
    margin: 15px auto;
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

const SubmitButton = styled.button`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-60%);
  padding: 9px 15px;
  background-color: #ff8a80;
  color: white;
  border: none;
  font-size: 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #ff6e66;
  }

  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`;

export default RegisterForm;
