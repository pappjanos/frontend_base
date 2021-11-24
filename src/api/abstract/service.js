import axios from "axios";
import store from "../../store/index";

export default class Service {
  constructor(baseURL) {
    this.api = axios.create({ baseURL });
    this.api.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    this.api.interceptors.response.use(
      (config) => {
        return config;
      },
      (error) => {
        store.dispatch(
          "general/setSnackbar",
          {
            message: `Error status: ${error.response.status}`,
            color: "red",
          },
          { root: true }
        );
        return Promise.reject(error);
      }
    );
  }
}
