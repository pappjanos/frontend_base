import userService from "../../api/services/userService";
import dummyService from "../../api/services/dummyService";
import { parse } from "@/util/jwt"
import router from "../../router";

function setMessage(context, message, color = 'red') {
  context.dispatch(
    "general/setSnackbar",
    {
      message,
      color,
    },
    { root: true }
  );
}

export const actions = {
  setEmail(context, to) {
    context.commit("SET_EMAIL", to);
  },

  async login(context, { email, password }) {
   try {
     const response = await userService.login({ email, password });
     localStorage.setItem("token", response.data.token);
     const tokenPayload = parse(response.data.token)

     context.commit("SET_USER", {
       email: tokenPayload.user.email,
       isloggedIn : true,
       roles: tokenPayload.user.roles
     })

     // call setAuthToken for all apis here
     dummyService.setAuthToken(response.data.token);

     setMessage(context, response.data.message, "green")
     router.push({name: "Home"});
   } catch (error) {
     setMessage(context, error.response.data.message)
   }
  },

  async register(context, { email, password }) {
    const user = {
      email,
      password,
    };
    try {
      const response = await userService.register(user);
      setMessage(context, response.data.message, "green")
      router.push({name: "Login"});
    } catch (error) {
      setMessage(context, error.response.data.message)
    }
  },

  async logout(context) {
    localStorage.clear("token");
    context.commit("CLEAR_USER")
    router.push({name: "Login"});
  },
};
