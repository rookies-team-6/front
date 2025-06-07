import axios from "axios";

const serverInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    baseURL: `${import.meta.env.VITE_SERVER_ADDRESS}`,
    withCredentials: true,
});

// serverInstance.interceptors.request.use((config) => {
//     const token = serverInstance.defaults.headers.common["Authorization"];
//     if (token) {
//         config.headers["Authorization"] = token;
//     }
//     return config;
// });

serverInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        console.log(originalRequest);
        console.log(error.response);

        if (error.response?.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;
            console.log("진입");

            try {
                const refreshRes = await axios.post(
                    `${import.meta.env.VITE_SERVER_ADDRESS}auth/refresh`,
                    {},
                    { withCredentials: true }
                );
                console.log(refreshRes);
                const newAccessToken = refreshRes.data.accessToken;

                console.log("새로운 어세스 토큰", newAccessToken);
                // ✅ 메모리 기반으로 다시 등록
                serverInstance.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${newAccessToken}`;

                // ✅ 기존 요청에 새 토큰 주입 후 재시도
                originalRequest.headers[
                    "Authorization"
                ] = `Bearer ${newAccessToken}`;
                return serverInstance(originalRequest);
            } catch (refreshError) {
                // window.location.href = "/";
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

const devServerInstance = axios.create();

export { devServerInstance, serverInstance };
