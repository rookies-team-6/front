import styled from "styled-components";
import theme from "@app/styles/theme";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegisterData, requestEmailVerification, verifyEmailCode } from "@shared/Apis/auth";
import useRegisterStore from "@shared/zustand/registerStore"

import { RegisterFormSchema } from "@shared/schemas/registerSchema";

const RegisterForm: React.FC = () => {
  const {employeeNumber, employeeName } = useRegisterStore();
  const [email, setEmail] = useState("");
  const [emailCode, setEmailCode] = useState(""); // 이메일 인증코드 입력값
  const [emailSent, setEmailSent] = useState(false); // 이메일 인증코드 전송 여부
  const [emailVerified, setEmailVerified] = useState(false); // 이메일 인증 완료 여부
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // const isRegisterButtonDisabled =
  //   !employeeName || !employeeNumber || !emailVerified || !password || password !== passwordConfirm;

  const navigate = useNavigate();

  // 이메일 인증 코드 전송
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

  // 이메일 인증 코드 검증
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

    try{
        RegisterFormSchema.parse({
              email: email,
              password: password,
              passwordConfirm: passwordConfirm
            });

      const response = await postRegisterData({ email, password, passwordConfirm });
      console.log("회원가입 성공:", response);
      alert("회원가입에 성공했습니다!");
      navigate("/", { replace: true });

    }catch(error){
      alert(error);
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
        <Label htmlFor="passwordConfirm">비밀번호 확인</Label>
        <Input
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <Button type="submit" onClick={handleRegister}>Sign up</Button>
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
  font-size: 16px;
  color: #000000;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #999999;
  border-radius: 10px;
`;

const Button = styled.button<{ disabled?: boolean }>`
  padding: 10px 0;
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
