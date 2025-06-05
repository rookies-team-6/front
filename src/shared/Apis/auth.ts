import { devServerInstance, serverInstance } from "@shared/apiInstance";
import axios from "axios";

interface VerifyRequest {
    username: string;
    employeeNum: string;
}

interface LoginRequestBody {
    email: string;
    password: string;
}

interface LoginResponse {
    token: string;
}

interface RegisterFormContent {
    email: string;
    password: string;
    passwordConfirm: string;
}

const postSignIn = async (body: LoginRequestBody): Promise<LoginResponse> => {
    const res = await devServerInstance.post("/api/signin", { data: body });

    const token = res.token;
    console.log(token)

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; //앞으로 요청마다 헤더에 자동으로 token을 넣고 요청함
    // token localStorage, cookie 등에 저장하지 않는다!

    return res.data;
};

//화면페이지전환 혹은 화면새로고침할 때마다 요청하여 로그인만료시간 체크 & 만료시간 갱신하기
// const onSilentRefresh = async() => {
//   devServerInstance.get('/api/refresh').then(onLoginSuccess).catch(error=>{
//     throw `인증 만료됨: ${error}` //이 부분은 임시로 throw처리함. 나중에 다시 수정하도록
//   })
// }

const postRegisterData = async (formData: RegisterFormContent) => {
    const res = await devServerInstance.post("/api/registerforms", {
        data: formData, // 객체를 그대로 data에 전달
    });
};


const getVerify = async (queryParam: VerifyRequest) => {
    const res = serverInstance.get(
        `/auth/verify?username=${queryParam.username}&employeeNum=${queryParam.employeeNum}`
    );
};

const getEmailCheck = async (email: string) => {
    const res = serverInstance.get(`/auth/email/check?email=${email}`);
};

// refresh token 재발급
const postRefreshToken = async () => {
    const res = serverInstance.get(`/auth/refresh`);
};

const postSignOut = async () => {
    const res = serverInstance.get(`/auth/signout`);
};

export { postSignIn, postSignUp };
