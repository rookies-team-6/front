import styled from "styled-components";
import theme from "@app/styles/theme";
import React, { useState } from "react";
import { postRegisterData } from "@shared/Apis/auth";

const Container = styled.div`
  width: 57.22%;
  height: 80.47%;
  margin: auto;
  background-color: #ffffff;
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

const Button = styled.button`
  padding: 10px 0;
  font-size: 16px;
  color: #ffffff;
  background-color: ${theme.orange.o500};
  border: none;
  border-radius: 10px;
  cursor: pointer;
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

const RegisterForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleRegister = async () => {
        try {
        const response = await postRegisterData({ name, email, password, passwordConfirm });
        console.log("회원가입 성공:", response);
        } catch (error) {
        console.error("회원가입 실패:", error);
        alert("회원가입에 실패했습니다.");
        }
  };

  const handleLogin = () => {
        alert("로그인 페이지로 이동합니다."); // 임시 처리
        // TODO: 필요시 로그인 라우터 이동
    };

  return (
    <Container>
      <Title>회원가입</Title>
      <Form>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Label htmlFor="passwordConfirm">Password Confirm</Label>
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

export default RegisterForm;
