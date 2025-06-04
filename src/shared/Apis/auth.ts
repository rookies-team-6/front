import { devServerInstance } from "@shared/apiInstance";
import axios from "axios";

interface LoginRequestBody {
    email: string;
    password: string;
}

interface LoginResponse {
    message: string;
    token: string;
}

interface RegisterFormContent {
    email: string;
    password: string;
    passwordConfirm: string;
}

const postLogin = async (body: LoginRequestBody): Promise<LoginResponse> => {
    const res = await devServerInstance.post("/api/login", { data: body });

    const { token } = res.data;

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

    console.log("서버 응답 데이터:", res.data);
    return res.data;
};

export { postLogin, postRegisterData };
