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
import { postSignUp } from "@shared/Apis/auth";
import { useMutation } from "@tanstack/react-query";

const RegisterForm: React.FC = () => {
    // 사원 번호 유저 이름
    const { employeeNumber, employeeName } = useRegisterStore();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch,
        setError,
        clearErrors,
        setValue,
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(RegisterFormSchema),
        mode: "onChange",
        defaultValues: {
            isEmailChecked: true,
        },
    });

    const email = watch("email");

    const navigate = useNavigate();

    // 중복 확인 관련(수정 필요)
    // const { mutate: checkEmail, isPending } = useMutation({
    //     mutationFn: checkEmailDuplicate,
    //     onSuccess: (isDuplicate) => {
    //         if (isDuplicate) {
    //             setError("email", {
    //                 type: "manual",
    //                 message: "이미 사용 중인 이메일입니다.",
    //             });
    //             setValue("isEmailChecked", false);
    //         } else {
    //             clearErrors("email");
    //             setValue("isEmailChecked", true);
    //             alert("사용 가능한 이메일입니다.");
    //         }
    //     },
    //     onError: () => {
    //         setError("email", {
    //             type: "manual",
    //             message: "이메일 확인 중 오류가 발생했습니다.",
    //         });
    //     },
    // });
    // 회원가입 누르면 되는 부분 관련(수정 필요)
    const { mutate: registerMutate } = useMutation({
        mutationFn: postSignUp,
        onSuccess: (data) => {
            console.log(data);
            alert("회원가입이 완료되었습니다.");
            navigate("/");
        },
        onError: (error: any) => {
            const code = error?.response?.data?.error?.code;
            const message = error?.response?.data?.error?.message;

            if (code === "A005") {
                setError("email", {
                    type: "manual",
                    message: message || "중복된 이메일입니다.",
                });
            } else if (code === "A002") {
                setError("passwordConfirm", {
                    type: "manual",
                    message: message || "비밀번호가 일치하지 않습니다.",
                });
            } else if (code === "EA001") {
                alert(message || "존재하지 않는 사번입니다.");
            } else {
                alert("알 수 없는 오류가 발생했습니다.");
            }
        },
    });

    const onSubmit = (data: RegisterFormValues) => {
        if (!data.isEmailChecked) {
            setError("isEmailChecked", {
                type: "manual",
                message: "이메일 중복 확인을 해주세요.",
            });
            return;
        }
    };

    return (
        <Container>
            <Title>회원가입</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Label>이름</Label>
                <Input type="text" value={employeeName} readOnly />
                <Label>사원 번호</Label>
                <Input type="text" value={employeeNumber} readOnly />

                <Label htmlFor="email">이메일</Label>
                <InputWrapper>
                    <Input type="email" {...register("email")} />
                    {/* <SubmitButton
                        type="button"
                        onClick={() => checkEmail(email)}
                        disabled={!email || isPending}
                    >
                        {isPending ? "확인 중..." : "중복확인"}
                    </SubmitButton> */}
                </InputWrapper>
                {errors.email && <ErrorText>{errors.email?.message}</ErrorText>}
                {/*이거도 수정 필요*/}
                {errors.isEmailChecked && (
                    <ErrorText>{errors.isEmailChecked?.message}</ErrorText>
                )}
                <Label htmlFor="password">비밀번호</Label>
                <Input type="password" {...register("password")} />
                {errors.password && (
                    <ErrorText>{errors.password?.message}</ErrorText>
                )}
                <Label htmlFor="passwordConfirm">비밀번호 확인</Label>
                <Input type="password" {...register("passwordConfirm")} />
                {errors.passwordConfirm && (
                    <ErrorText>{errors.passwordConfirm.message}</ErrorText>
                )}
                <Button type="submit" disabled={!isValid}>
                    Sign up
                </Button>
            </Form>
            <RegisterButton type="button" onClick={() => navigate("/")}>
                로그인으로 돌아가기
            </RegisterButton>
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

const ErrorText = styled.p`
    color: red;
    margin-bottom: 12px;
`;

export default RegisterForm;
