import * as MutationTypes from "./mutation-types";
import { loading } from "@/modules/core/helpers/loading";
import MacapaService from "../service/MacapaHttpService";

export const getContactsMacapa = loading(async (_, payload) => {
    const response = await MacapaService.getContactsMacapa(payload);
    return response.data;
});

export const createContactMacapa = loading(async (_, payload) => {
    const response = await MacapaService.createContactMacapa(payload);
    return response.data;
});

export const updateContactMacapa = loading(async (_, payload) => {
    const response = await MacapaService.updateContactMacapa(payload);
    return response.data;
});

export const getContactMacapa = loading(async (_, payload) => {
    const response = await MacapaService.getContactMacapa(payload);
    return response.data;
});

export const deleteContactMacapa = loading(async (_, payload) => {
    const response = await MacapaService.deleteContactMacapa(payload);
    return response.data;
});

export const setFormData = ({ commit }, formData) => {
    commit(MutationTypes.SET_FORM_DATA, formData);
};
