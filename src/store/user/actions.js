import userService from "../../api/services/userService";

export const actions = {
  setEmail(context, to) {
    context.commit("SET_EMAIL", to);
  },
  async login(context, { email, password }) {
    try {
      const token = await userService.login({ email, password });
      console.log(token.data);
    } catch (error) {
      console.log(error);
      /*
      switch (error.status) {
        case 404:
          console.log("404");
          break;

        default:
          break;
      }*/
    }
  },
};
