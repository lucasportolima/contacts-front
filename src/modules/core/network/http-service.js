import _ from "lodash";
import { createHttp } from "./http";

class HttpService {
    constructor(resource) {
        const useAuthorization = resource !== "account";
        this.http = createHttp(useAuthorization);
        this.resource = resource;
    }

    get(params, config) {
        let request = this.resource;
        // Ex. GET /resource?featured=1&active=1
        let options = { params };

        if (typeof params === "string" || typeof params === "number") {
            // Ex. GET /resource/featured
            request = `${this.resource}/${params}`;
            options = config;
        }

        return this.http.get(`${request}/`, options);
    }

    patch(body, route) {
        let resource = this.resource;

        if (_.isEmpty(route) === false) {
            resource = `${this.resource}/${route}`;
        }

        return this.http.patch(`${resource}/`, body);
    }

    post(body, route, config) {
        let resource = this.resource;

        if (_.isEmpty(route) === false) {
            resource = `${this.resource}/${route}`;
        }

        return this.http.post(`${resource}/`, body, config);
    }

    put(body, route) {
        let resource = this.resource;

        if (_.isEmpty(route) === false) {
            resource = `${this.resource}/${route}`;
        }

        return this.http.put(`${resource}/`, body);
    }

    delete(params) {
        let request = this.resource;
        let options;

        if (typeof params === "string") {
            // Ex. DELETE /resource/featured
            request = `${this.resource}/${params}`;
        } else {
            // Ex. DELETE /resource?featured=1&active=1
            options = { params };
        }

        return this.http.delete(`${request}/`, options);
    }
}

export default HttpService;
