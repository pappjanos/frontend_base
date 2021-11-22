import userService from "../../api/services/userService";
import router from "../../router";

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
      switch (response.data.registerStatus) {
        case "SUCCESS":
          context.dispatch(
            "general/setSnackbar",
            {
              status: true,
              message: `Registration successfull!`,
              timeout: 5000,
              color: "green",
            },
            { root: true }
          );
          router.push("Login");
          break;

        case "FAILED":
          context.dispatch(
            "general/setSnackbar",
            {
              status: true,
              message: `The e-mail address ${email} is already used, try to log in!`,
              timeout: 5000,
              color: "red",
            },
            { root: true }
          );

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
