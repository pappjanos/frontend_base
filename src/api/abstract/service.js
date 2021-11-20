import axios from "axios";

export default class Service {
  constructor(baseURL) {
    this.api = axios.create({ baseURL });
    this.api.interceptors.request.use(
      (config) => {
        console.log("request interceptor for all outgoing requests");
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}
