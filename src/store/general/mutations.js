export const mutations = {
  SET_SNACKBAR(state, to) {
    state.snackbar = to;
  },
  CLOSE_SNACKBAR(state) {
    state.snackbar.status = false;
  },
};
