import { register } from "register-service-worker";
import userService from "../../api/services/userService";

export const actions = {
  setEmail(context, to) {
    context.commit("SET_EMAIL", to);
  },
  async login(context, { email, password }) {
    try {
      const token = await userService.login({ email, password });
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  },
  async register(context, { email, password }) {
    const user = {
      email,
      password,
    };
    try {
      const response = await userService.register(user);
    } catch (error) {
      console.log(error);
    }
  },
  async checkMailAvailability(context, email) {
    try {
      const response = await userService.checkMailAvailability(email);
      context.commit("SET_MAIL_AVAILABILITY", response.data.emailAvailability);
    } catch (error) {
      console.log(error);
    }
  },
};
