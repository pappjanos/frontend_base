import userService from "../../api/services/userService";

export const actions = {
  setEmail(context, to) {
    context.commit("SET_EMAIL", to);
  },
  login(context, { email, password }) {
    userService.login();
  },
};
