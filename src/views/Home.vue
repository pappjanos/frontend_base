<template>
  <div>
    <div align="center" v-if="!user.isloggedIn">
      <v-img
        lazy-src="img/blog2.png"
        max-width="600"
        src="img/blog2.png"
      ></v-img>
      <h3 class="mt-5">
        This is your private blog, register and sign in, then you can start
        writing your own private diary!
      </h3>
    </div>
    <div v-if="user.isloggedIn">
      <BlogList />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BlogList from "@/components/BlogList";

export default {
  name: "Home",
  components: { BlogList },
  computed: {
    ...mapGetters("user", ["user"]),
  },
  methods: {
    ...mapActions("blog", ["getBlogEntries"]),
  },
  async created() {
    if (this.user.isloggedIn) {
      await this.getBlogEntries(this.user.id);
    }
  },
};
</script>
