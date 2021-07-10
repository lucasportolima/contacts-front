import * as MutationTypes from "./mutation-types";
import { initialState } from "./state";

export const mutations = {
    [MutationTypes.SET_USER](state, user) {
        state.data = user;
    },

    [MutationTypes.RESET_USER](state) {
        state.data = initialState();
    }
};
