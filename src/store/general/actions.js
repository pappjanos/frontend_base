export const actions = {
  setSnackbar(context, to) {
    context.commit("SET_SNACKBAR", to);
  },
  closeSnackbar(context) {
    context.commit("CLOSE_SNACKBAR", false);
  },
};
