export const mutations = {
  SET_BLOG_ENTRIES(state, to) {
    state.blogEntries = to;
  },
  ADD_BLOG_ENTRY(state, blogEntry) {
    state.blogEntries.push(blogEntry)
  },
  SET_BLOG_ENTRY(state, to) {
    state.blogEntry = to;
  },
  PATCH_BLOG_ENTRY(state, to, id) {
    state.blogEntries[id] = to
    state.blogEntry = to
  },
  DELETE_BLOG_ENTRY(state, id) {
    state.blogEntries = state.blogEntries.filter((entry) => entry.id === id);
  }
};
