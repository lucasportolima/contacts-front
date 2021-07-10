import HttpService from "../../core/network/http-service";

class MacapaHttpService extends HttpService {
    constructor() {
        super("macapa");
    }

    createContactMacapa(payload) {
        return this.post(payload);
    }

    updateContactMacapa({ id, data }) {
        return this.patch(data, `${id}`);
    }

    getContactsMacapa(payload) {
        return this.get(payload);
    }

    getContactMacapa(payload) {
        return this.get(`${payload}`);
    }

    deleteContactMacapa(payload) {
        return this.delete(`${payload}`);
    }
}

export default new MacapaHttpService();
