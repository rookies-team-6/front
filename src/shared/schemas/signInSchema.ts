import { z } from "zod";

// 이메일 유효성 검사 규칙
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;

// 비밀번호 유효성 검사 규칙
// 영문, 숫자, 특수문자(!@#$%^&*()_+=-) 조합 8~20자
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+=-]).{8,20}$/;
export const SignInSchema = z.object({
    email: z
        .string()
        .min(1, { message: "이메일을 입력해주세요." })
        .regex(emailRegex, {
            message: "올바른 이메일 형식을 입력해주세요. 예: user@example.com",
        }),
    password: z
        .string()
        .min(1, { message: "비밀번호를 입력해주세요." })
        .regex(passwordRegex, {
            message:
                "비밀번호는 영문, 숫자, 특수문자(!@#$%^&*()_+=-)를 포함하여 8~20자여야 합니다.",
        }),
});

export type SignInFormType = z.infer<typeof SignInSchema>;
