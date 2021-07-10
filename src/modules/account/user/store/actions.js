import * as MutationTypes from "./mutation-types";
import { loading } from "@/modules/core/helpers/loading";
import JWTService from "@/modules/core/service/JWTService";

export const getUserToken = loading(async () => {
    const token = JWTService.getToken();
    return `Bearer ${token}`;
});

export const setUser = ({ commit }, user) => {
    commit(MutationTypes.SET_USER, user);
};

export const resetUser = ({ commit }) => {
    commit(MutationTypes.RESET_USER);
};
