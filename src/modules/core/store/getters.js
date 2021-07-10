export const isLoading = state => state.isLoading;
export const snackbarInfo = state => state.snackbarInfo;
export const sidebarIsShow = state => {
    if (state.isLoading) {
        return false;
    }
    return state.sidebar.isShow;
};
