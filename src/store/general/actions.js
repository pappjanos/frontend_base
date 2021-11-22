export const actions = {
  setAlert(context, to) {
    context.commit("SET_ALERT", to);
  },
  closeAlert(context) {
    context.commit("CLOSE_ALERT", false);
  },
};
