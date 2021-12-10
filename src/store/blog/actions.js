import userService from "../../api/services/userService";
import dummyService from "../../api/services/dummyService";
import blogService from "../../api/services/blogService";

function setMessage(context, message, color = "red") {
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
  async getBlogEntries(context, userId) {
    try {
      const response = await blogService.getPosts({ userId });
      context.commit("SET_BLOG_ENTRIES", response.data.blogEntries);
    } catch (error) {
      console.log(error);
      setMessage(context, error.response.data.message);
    }
  },
};
