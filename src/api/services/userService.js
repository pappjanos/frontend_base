import Service from "../abstract/service";
import Api from "../../../apis/api.json";

class UserService extends Service {
  constructor() {
    super(Api[window.location.host].USER_SERVICE_URL);
    this.api.interceptors.request.use(
      (config) => {
        console.log("request interceptor for user service outgoing requests");
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  login({ email, password }) {
    console.log("axios get");
    return this.api.post("/login", {
      email,
      password,
    });
  }
}

const userService = new UserService();

export default userService;
