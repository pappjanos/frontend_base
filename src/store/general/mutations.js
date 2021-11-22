export const mutations = {
  SET_ALERT(state, to) {
    state.alert = to;
  },
  CLOSE_ALERT(state) {
    state.alert.status = false;
  },
};
