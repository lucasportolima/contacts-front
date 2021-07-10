import * as MutationTypes from "./mutation-types";
import { loading } from "@/modules/core/helpers/loading";
import VarejaoService from "../service/VarejaoHttpService";

export const getContactsVarejao = loading(async (_, payload) => {
    const response = await VarejaoService.getContactsVarejao(payload);
    return response.data;
});

export const createContactVarejao = loading(async (_, payload) => {
    const response = await VarejaoService.createContactVarejao(payload);
    return response.data;
});

export const updateContactVarejao = loading(async (_, payload) => {
    const response = await VarejaoService.updateContactVarejao(payload);
    return response.data;
});

export const getContactVarejao = loading(async (_, payload) => {
    const response = await VarejaoService.getContactVarejao(payload);
    return response.data;
});

export const deleteContactVarejao = loading(async (_, payload) => {
    const response = await VarejaoService.deleteContactVarejao(payload);
    return response.data;
});

export const setFormData = ({ commit }, formData) => {
    commit(MutationTypes.SET_FORM_DATA, formData);
};
