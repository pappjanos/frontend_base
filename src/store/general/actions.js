export const actions = {
  setSnackbar(context, to) {
    const settings = {
      status: true,
      message: to.message,
      timeout: 5000,
      color: to.color,
    };
    context.commit("SET_SNACKBAR", settings);
  },
  closeSnackbar(context) {
    context.commit("CLOSE_SNACKBAR", false);
  },
};
