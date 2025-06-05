import React from "react";
import styled from "styled-components";
import logoImage from "@shared/assets/icon/logo.png";
import theme from "@app/styles/theme";
import { postSignIn } from "@shared/Apis/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
    type SignInFormType,
    SignInSchema,
} from "@/shared/schemas/signInSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm: React.FC = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch,
    } = useForm<SignInFormType>({
        resolver: zodResolver(SignInSchema),
        mode: "onChange",
    });

    const handleLogin = async (data) => {
            const isSuccessed = await postSignIn(data);
            if (isSuccessed) {
                navigate("/home");
            } else {
                alert("이메일 또는 비밀번호가 올바르지 않습니다.");
            }
        };

    return (
        <Wrapper onSubmit={handleSubmit(handleLogin)}>
            <Logo src={logoImage} alt="제대로 보안니 로고" />
            <Input
                type="email"
                placeholder="Email"
                value={watch("email")}
                {...register("email")}
            />
            {errors.email && (
            <ErrorText>{errors.email?.message}</ErrorText>
            )}
            <Input
                type="password"
                placeholder="Password"
                value={watch("password")}
                {...register("password")}
            />
            {errors.password && (
            <ErrorText>{errors.password?.message}</ErrorText>
            )}
            <Button type="submit" disabled={!isValid}>
                Log In
            </Button>
            <RegisterButton onClick={() => navigate("/checkemplnum")}>
                계정이 없으신가요?
            </RegisterButton>
        </Wrapper>
    );
};

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 2.5%;
    background-color: ${theme.yellow.y100};
`;

const Logo = styled.img`
    width: 100%;
    max-width: 200px;
    margin-bottom: 2px;
`;

const Input = styled.input`
    width: 130%;
    max-width: 300px;
    padding: 10px 15px;
    margin-bottom: 25px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 12px;
    box-sizing: border-box;
`;

const Button = styled.button<{ disabled: boolean }>`
    width: 130%;
    max-width: 300px;
    padding: 10px 15px;
    background-color: ${(props) =>
        props.disabled ? "#c4c4c4" : theme.orange.o500};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

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
    font-size: 12px;
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
    width: 130%;
    max-width: 300px;
    font-size: 12px;
    color: red;
    margin-top: -20px;
    margin-bottom: 12px;
    text-align: left;
`;
export default LoginForm;
