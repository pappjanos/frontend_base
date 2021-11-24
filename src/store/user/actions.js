import userService from "../../api/services/userService";
import router from "../../router";

export const actions = {
  setEmail(context, to) {
    context.commit("SET_EMAIL", to);
  },
  async login(context, { email, password }) {
    try {
      const token = await userService.login({ email, password });
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
      switch (response.data.status) {
        case "Succesfull registration":
          context.dispatch(
            "general/setSnackbar",
            {
              message: `Registration successfull!`,
              color: "green",
            },
            { root: true }
          );
          router.push("Login");
          break;

        case "Already registered":
          context.dispatch(
            "general/setSnackbar",
            {
              message: `The e-mail address ${email} is already used, try to log in with it or ask for a new password if you forgot it!`,
              color: "red",
            },
            { root: true }
          );
          break;

        case "Database error":
          context.dispatch(
            "general/setSnackbar",
            {
              message: `Database error, try again later!`,
              color: "red",
            },
            { root: true }
          );

          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
