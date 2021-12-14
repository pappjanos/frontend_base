export const mutations = {
  SET_BLOG_ENTRIES(state, to) {
    state.blogEntries = to;
  },
  ADD_BLOG_ENTRY(state, blogEntry) {
    state.blogEntries.push(blogEntry)
  },
  SET_BLOG_ENTRY(state, to) {
    state.blogEntry = to;
  }
};
