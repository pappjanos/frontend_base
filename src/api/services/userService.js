import Service from "../abstract/service";
import Api from "../../../apis/api.json";

class UserService extends Service {
  constructor() {
    console.log(window.location.host);
    super(Api[window.location.host].USER_SERVICE_URL);
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
        return Promise.reject(error);
      }
    );
  }

  login({ email, password }) {
    return this.api.post("/login", {
      email,
      password,
    });
  }

  register(user) {
    return this.api.post("/register", user);
  }
}

const userService = new UserService();

export default userService;
