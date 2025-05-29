import React, { useState } from "react";
import styled from "styled-components";
import logoImage from "@shared/assets/icon/logo.png";
import theme from "@app/styles/theme";
import { postLogin } from "@shared/Apis/auth";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
        const response = await postLogin({ email, password });
        console.log("로그인 성공:", response);
        navigate("/home"); // ✅ 홈으로 이동
        } catch (error) {
        console.error("로그인 실패:", error);
        alert("로그인에 실패했습니다.");
        }
    };

    const handleRegister = () => {
        navigate("/register"); // ✅ 회원가입 페이지로 이동
    };

    return (
        <Wrapper>
        <Logo src={logoImage} alt="제대로 보안니 로고" />
        <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Log In</Button>
        <RegisterButton onClick={handleRegister}>
            계정이 없으신가요?
        </RegisterButton>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 2.5%;
    background-color: ${theme.yellow.y100};
`;

const Logo = styled.img`
    width: 50%;
    max-width: 200px;
    margin-bottom: 10px;
`;

const Input = styled.input`
    width: 80%;
    max-width: 300px;
    padding: 10px 15px;
    margin-bottom: 25px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 12px;
    box-sizing: border-box;
`;

const Button = styled.button`
    width: 80%;
    max-width: 300px;
    padding: 10px 15px;
    background-color: ${theme.orange.o500};
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: Regular;
    font-size: 12px;
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
        background-color: #e0a800;
    }
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

export default LoginForm;
