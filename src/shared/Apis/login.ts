import { devServerInstance } from "@shared/apiInstance";

interface LoginRequestBody {
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
  token: string;
}

const postLogin = async (body: LoginRequestBody): Promise<LoginResponse> => {
  const res = await devServerInstance.post("/api/login", { data: body });
  return res.data;
};

export { postLogin}
