import HttpService from "../../core/network/http-service";

class VarejaoHttpService extends HttpService {
    constructor() {
        super("varejao");
    }

    createContactVarejao(payload) {
        return this.post(payload);
    }

    updateContactVarejao({ id, data }) {
        return this.patch(data, `${id}`);
    }

    getContactsVarejao(payload) {
        return this.get(payload);
    }

    getContactVarejao(payload) {
        return this.get(`${payload}`);
    }

    deleteContactVarejao(payload) {
        return this.delete(`${payload}`);
    }
}

export default new VarejaoHttpService();
