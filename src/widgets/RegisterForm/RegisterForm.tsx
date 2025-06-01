import styled from "styled-components";
import theme from "@app/styles/theme";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegisterData, requestEmailVerification, verifyEmailCode } from "@shared/Apis/auth";
import useRegisterStore from "@shared/zustand/registerStore"

import { RegisterFormSchema } from "@shared/schemas/registerSchema";
import { ZodError } from "zod"; 

const RegisterForm: React.FC = () => {
  const {employeeNumber, employeeName } = useRegisterStore();
  const [email, setEmail] = useState("");
  const [emailCode, setEmailCode] = useState(""); // 이메일 인증코드 입력값
  const [emailSent, setEmailSent] = useState(false); // 이메일 인증코드 전송 여부
  const [emailVerified, setEmailVerified] = useState(false); // 이메일 인증 완료 여부
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  //회원가입 버튼 비활성화 관련
  // const isRegisterButtonDisabled =
  //   !employeeName || !employeeNumber || !emailVerified || !password || password !== passwordConfirm;

  const navigate = useNavigate();

  // 이메일 인증 코드 전송 관련(수정필요)
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

  // 이메일 인증 코드 검증(수정필요)
  const handleVerifyEmailCode = async () => {
    try {
      const response = await verifyEmailCode(email, emailCode); // 서버에 인증 코드 검증 요청
      if (response.success) {
        alert("이메일 인증이 완료되었습니다.");
        setEmailVerified(true);
      } else {
        alert("인증 코드가 올바르지 않습니다.");
      }
    } catch (error) {
      console.error("이메일 인증 실패:", error);
      alert("이메일 인증에 실패했습니다.");
    }
  };

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
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={emailVerified}
        />
        {errors.email && <p style={{ color: "red", marginBottom: "12px" }}>{errors.email}</p>}
        {/* 일단 다른 부분들 테스트를 해야해서 이메일 인증 관련 부분은 주석처리
        {!emailVerified && (
          <Button type="button" onClick={handleSendEmailCode} disabled={!email}>
            인증하기
          </Button>
        )}
        */}

        {emailSent && !emailVerified && (
          <>
            <Label>인증번호</Label>
            <Input
              type="text"
              value={emailCode}
              onChange={(e) => setEmailCode(e.target.value)}
            />
            <Button type="button" onClick={handleVerifyEmailCode} disabled={!emailCode}>
              인증번호 확인
            </Button>
          </>
        )}
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

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 8px;
  border: 1px solid #999999;
  border-radius: 10px;

  &:read-only{
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
    margin-top: 15px;
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

export default RegisterForm;
