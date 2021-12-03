import Service from "../abstract/service";
import Api from "../../../apis/api.json";

class DummyService extends Service {
  constructor() {
    super(Api[window.location.host].DUMMY_SERVICE_URL);

    /*
    this.api.interceptors.request.use(
      (config) => {
        console.log("request interceptor for dummy service outgoing requests");
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );*/
  }

  dummyaction() {
    console.log("axios post");
    return this.api.post("/test", {asdf: "asdf"});
  }
}

const dummyService = new DummyService();

export default dummyService;
