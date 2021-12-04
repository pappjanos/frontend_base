export const mutations = {
  SET_EMAIL(state, to) {
    state.user.email = to;
  },

  SET_USER(state, to) {
    state.user = to
  }, 
  CLEAR_USER(state) {
    state.user.email = null;
    state.user.isLoggedIn = false;
    state.user.roles = null;
  }
};
