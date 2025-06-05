import axios from "axios";

axios.defaults.withCredentials = true;

const serverInstance = axios.create({
    headers: {
    "Content-Type": "application/json",
    },
    baseURL: `${import.meta.env.VITE_SERVER_ADDRESS}`
})

const devServerInstance = axios.create()

// 응답 인터셉터
devServerInstance.interceptors.response.use(
  (response) => {
    const resData = response.data;

    if (!resData.success) {
      // 성공이 false일 경우, 에러 메시지 추출
      const errorMessage =
        resData.error?.message || resData.message || "요청에 실패했습니다.";

      return Promise.reject(new Error(errorMessage));
    }

    // 성공 시 data 반환
    return resData.data;
  },
  (error) => {
    const status = error.response?.status;
    const message =
      error.response?.data?.error?.message ||
      error.response?.data?.message ||
      error.message ||
      "알 수 없는 오류가 발생했습니다.";

    console.error("API Error:", message);

    return Promise.reject(new Error(`${status || "Unknown"} Error: ${message}`));
  }
);

// 응답 인터셉터
serverInstance.interceptors.response.use(
  (response) => {
    const resData = response.data;

    if (!resData.success) {
      // 성공이 false일 경우, 에러 메시지 추출
      const errorMessage =
        resData.error?.message || resData.message || "요청에 실패했습니다.";

      return Promise.reject(new Error(errorMessage));
    }

    // 성공 시 data 반환
    return resData.data;
  },
  (error) => {
    const status = error.response?.status;
    const message =
      error.response?.data?.error?.message ||
      error.response?.data?.message ||
      error.message ||
      "알 수 없는 오류가 발생했습니다.";

    console.error("API Error:", message);

    return Promise.reject(new Error(`${status || "Unknown"} Error: ${message}`));
  }
);

export {devServerInstance, serverInstance}