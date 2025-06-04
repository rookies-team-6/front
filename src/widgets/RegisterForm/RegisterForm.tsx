import styled from "styled-components";
import theme from "@app/styles/theme";
import React from "react";
import { useNavigate } from "react-router-dom";
import useRegisterStore from "@shared/zustand/registerStore";
import {
    RegisterFormSchema,
    type RegisterFormValues,
} from "@shared/schemas/registerSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterForm: React.FC = () => {
    // 사원 번호 유저 이름
    const { employeeNumber, employeeName } = useRegisterStore();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch,
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(RegisterFormSchema),
        mode: "onChange",
        defaultValues: {
            isEmailChecked: true,
        },
    });

    // const [errors, setErrors] = useState<Record<string, string>>({});

    const navigate = useNavigate();

    // 이메일 인증 코드 전송 관련(수정필요) -> 이제 여기를 중복확인 관련으로 바꾸기

    const handleLogin = () => {
        navigate("/");
    };

    return (
        <Container>
            <Title>회원가입</Title>
            <Form onSubmit={handleSubmit(handleLogin)}>
                <Label>이름</Label>
                <Input type="text" value={employeeName} readOnly />
                <Label>사원 번호</Label>
                <Input type="text" value={employeeNumber} readOnly />

                <Label htmlFor="email">이메일</Label>
                <InputWrapper>
                    <Input
                        type="email"
                        placeholder="올바른 이메일 형식으로 입력해주세요. 예: user@example.com"
                        {...register("email")}
                        // 여기는 중복 확인 관련으로 disabled? 뭐 이런 거 하면 되지 않을까요 아닌가... 하여튼
                    />
                    <SubmitButton type="button">중복확인</SubmitButton>
                </InputWrapper>
                {errors.email && (
                    <p style={{ color: "red", marginBottom: "12px" }}>
                        {errors.email?.message}
                    </p>
                )}
                <Label htmlFor="password">비밀번호</Label>
                <Input
                    type="password"
                    value={watch("password")}
                    {...register("password")}
                />
                {errors.password && (
                    <p style={{ color: "red", marginBottom: "12px" }}>
                        {errors.password?.message}
                    </p>
                )}
                <Label htmlFor="passwordConfirm">비밀번호 확인</Label>
                <Input
                    type="password"
                    value={watch("passwordConfirm")}
                    {...register("passwordConfirm")}
                />
                {errors.passwordConfirm && (
                    <p style={{ color: "red", marginBottom: "12px" }}>
                        {errors.passwordConfirm.message}
                    </p>
                )}
                <Button type="submit" disabled={!isValid}>
                    Sign up
                </Button>
            </Form>
            <RegisterButton type="submit">로그인으로 돌아가기</RegisterButton>
        </Container>
    );
};

const Container = styled.div`
    width: 55%;
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
    width: 100%;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 8px;
    border: 1px solid #999999;
    border-radius: 10px;
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
    background-color: ${(props) =>
        props.disabled ? "#c4c4c4" : theme.orange.o500};
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
