import { loading } from "@/modules/core/helpers/loading";
import AuthenticacionService from "../service/AuthenticationHttpService";
import JWTService from "@/modules/core/service/JWTService";

export const login = loading(async (_, payload) => {
    const response = await AuthenticacionService.login(payload);
    return response.data;
});

export const logoutUser = () => {
    JWTService.logout();
};

export const setToken = (_, token) => {
    return JWTService.storeToken(token);
};
