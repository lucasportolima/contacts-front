import HttpService from "@/modules/core/network/http-service";

class AuthenticationHttpService extends HttpService {
    constructor() {
        super("auth");
    }

    login(payload) {
        return this.post(payload, "obtain_token");
    }
}

export default new AuthenticationHttpService();
