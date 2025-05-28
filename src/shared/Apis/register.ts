import { devServerInstance } from "@shared/apiInstance";

const postRegisterData = async (formData: {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}) => {
  const res = await devServerInstance.post(
    "/api/registerforms",
    {
      data: formData, // 객체를 그대로 data에 전달
    }
  );

  console.log("서버 응답 데이터:", res.data);
  return res.data;
};

export { postRegisterData };