export const mutations = {
  SET_EMAIL(state, to) {
    state.user.email = to;
  },
  SET_MAIL_AVAILABILITY(state, to) {
    state.mailAvailability = to;
  },
};
