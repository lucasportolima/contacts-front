import * as MutationTypes from "./mutation-types";

export const mutations = {
    [MutationTypes.TOGGLE_SNACKBAR](state, snackbarInfo) {
        state.snackbarInfo = snackbarInfo;
    },
    [MutationTypes.TOGGLE_LOADING](state) {
        state.isLoading = !state.isLoading;
    },
    [MutationTypes.SET_SIDEBAR](state, value) {
        state.sidebar.isShow = value;
    },
    [MutationTypes.TOGGLE_SIDEBAR](state) {
        state.sidebar.isShow = !state.sidebar.isShow;
    }
};
