import { devServerInstance, serverInstance } from "@shared/apiInstance";
import axios from "axios";

interface VerifyRequest {
    username: string;
    employeeNum: string;
}

interface VerifyRequest {
    username: string;
    employeeNum: string;
}

interface LoginRequestBody {
    email: string;
    password: string;
}

interface LoginResponse {
    success: boolean;
    code: number;
    data: {
        accessToken: string;
    };
    message: string;
    timestamp: string;
    requestId: string;
}

interface RegisterFormContent {
    employeeNum: string;
    email: string;
    password: string;
    passwordCheck: string;
}

const postSignIn = async (body: LoginRequestBody): Promise<boolean> => {
    const res = await serverInstance.post("/auth/signin", body);
    // token localStorage, cookie 등에 저장하지 않는다!
    return res.data.success;
};

//화면페이지전환 혹은 화면새로고침할 때마다 요청하여 로그인만료시간 체크 & 만료시간 갱신하기
// const onSilentRefresh = async() => {
//   devServerInstance.get('/api/refresh').then(onLoginSuccess).catch(error=>{
//     throw `인증 만료됨: ${error}` //이 부분은 임시로 throw처리함. 나중에 다시 수정하도록
//   })
// }

const postSignUp = async (data: RegisterFormContent) => {
    const res = await serverInstance.post("/auth/signup", data);
};

export const getVerify = async (employeeNum: string, username: string) => {
    const res = await serverInstance.get("/auth/verify", {
        params: {
            username: username,
            employeeNum: employeeNum,
        },
    });
    console.log(res);
};

export const getEmailCheck = async (email: string) => {
    const res = serverInstance.get(`/auth/email/check?email=${email}`);
    return res;
};

// refresh token 재발급
const postRefreshToken = async () => {
    const res = serverInstance.get(`/auth/refresh`);
};

const postSignOut = async () => {
    const res = serverInstance.get(`/auth/signout`);
};

export { postSignIn, postSignUp };
