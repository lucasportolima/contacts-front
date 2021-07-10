import JWTService from "@/modules/core/service/JWTService";
import axios from "axios";

export const createHttp = (useAuthorization = true) => {
    const http = axios.create({
        baseURL: process.env.VUE_APP_API_BASE_URL
    });

    if (useAuthorization) {
        http.interceptors.request.use(
            config => {
                const token = JWTService.getToken();

                if (token) {
                    config.headers["Authorization"] = `Bearer ${token}`;
                }

                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );
    }

    http.interceptors.response.use(
        response => response,
        async error => {
            if (
                useAuthorization &&
                error.response.status === 401 &&
                window.location.pathname !== "/conta/login"
            ) {
                JWTService.logout();
                window.location.pathname = "/";
            }
            return Promise.reject(error.response);
        }
    );

    return http;
};
