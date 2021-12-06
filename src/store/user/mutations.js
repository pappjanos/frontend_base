export const mutations = {
  SET_EMAIL(state, to) {
    state.user.email = to;
  },

  SET_USER(state, to) {
    state.user = to;
  },
  LOGOUT_USER(state) {
    state.user = {
      email: null,
      isLoggedIn: false,
      roles: null,
    };
  },
};
