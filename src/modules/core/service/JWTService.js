import jwt_decode from "jwt-decode";

const TOKEN_KEY = "authToken";
const REFRESH_TOKEN_KEY = "refreshToken";

class JwtService {
    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    }

    isAuthenticated() {
        return !!localStorage.getItem(TOKEN_KEY);
    }

    async storeToken({ accessToken, refreshToken }) {
        if (accessToken && refreshToken) {
            localStorage.setItem(TOKEN_KEY, accessToken);
            localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
            return await jwt_decode(accessToken);
        }
    }

    logout() {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
    }
}

export default new JwtService();
