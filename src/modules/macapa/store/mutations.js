import * as MutationTypes from "./mutation-types";

export const mutations = {
    [MutationTypes.SET_FORM_DATA](state, formData) {
        state.data.create = {
            ...state.data.create,
            form: {
                ...formData
            }
        };
    }
};
