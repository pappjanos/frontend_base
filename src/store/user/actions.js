import userService from "../../api/services/userService";
import dummyService from "../../api/services/dummyService";

import router from "../../router";

export const actions = {
  setEmail(context, to) {
    context.commit("SET_EMAIL", to);
  },

  async login(context, { email, password }) {
    try {
      const response = await userService.login({ email, password });
      if (response.data.status === "fail") {
        if (response.data.msg === "Not registered") {
          context.dispatch(
            "general/setSnackbar",
            {
              message: `This email is not registered!`,
              color: "red",
            },
            { root: true }
          );
        } else if (response.data.msg === "Password does not match") {
          context.dispatch(
            "general/setSnackbar",
            {
              message: `Email and password does not match!`,
              color: "red",
            },
            { root: true }
          );
        }
      } else if (response.data.status === "success") {
        localStorage.setItem("token", response.data.token);
        dummyService.setAuthToken(response.data.token);
      }
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
        case "success":
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

        case "fail":
          context.dispatch(
            "general/setSnackbar",
            {
              message: `The e-mail address ${email} is already used, try to log in with it or ask for a new password if you forgot it!`,
              color: "red",
            },
            { root: true }
          );
          break;

        case "error":
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

  async logout(context) {},
};
