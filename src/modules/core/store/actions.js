import * as MutationTypes from "./mutation-types";

export const toggleSnackbar = ({ commit }, snackbarInfo) => {
    snackbarInfo.snackbar = true;
    commit(MutationTypes.TOGGLE_SNACKBAR, snackbarInfo);
    setTimeout(() => {
        snackbarInfo.snackbar = false;
        commit(MutationTypes.TOGGLE_SNACKBAR, snackbarInfo);
    }, 8000);
};

export const toggleLoading = ({ commit }) => {
    commit(MutationTypes.TOGGLE_LOADING);
};

export const toggleSidebar = ({ commit }) => {
    commit(MutationTypes.TOGGLE_SIDEBAR);
};

export const setSidebar = ({ commit }, value) => {
    commit(MutationTypes.SET_SIDEBAR, value);
};
