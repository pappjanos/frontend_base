import Service from "../abstract/service";
import Api from "../../../apis/api.json";

class BlogService extends Service {
  constructor() {
    super(Api[window.location.host].BLOG_SERVICE_URL);
  }

  getPosts(userId) {
    return this.api.get("/blog-entry", { params: userId });
  }
}

const blogService = new BlogService();

export default blogService;
