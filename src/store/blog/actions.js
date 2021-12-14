import blogService from "../../api/services/blogService";
import router from "../../router";

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

  async getBlogEntry(context, blogEntryId) {
    try {
      const response = await blogService.getPost(blogEntryId);
      context.commit("SET_BLOG_ENTRY", response.data.blogEntry)
    } catch (error) {
      console.log(error)
      setMessage(context, error.response.data.message);
    }
  },

  async addNewEntry(context, post) {
    try {
      const response = await blogService.addPost(post);
      context.commit("ADD_BLOG_ENTRY", response.data.blogEntry)
      setMessage(context, response.data.message, 'green');
      router.push({ name: "Home" }).catch(()=>{});
    } catch (error) {
      console.log(error)
      setMessage(context, error.response.data.message);
    }
  }
};
