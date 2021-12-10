<template>
  <div>
    <div v-for="blogEntry in blogEntries" :key="blogEntry.id">
      <BlogItem :blogEntry="blogEntry" />
    </div>
  </div>
</template>

<script>
import BlogItem from "./BlogItem.vue";
import { mapGetters } from "vuex";

export default {
  components: { BlogItem },
  computed: {
    ...mapGetters("blog", ["blogEntries"]),
  },
};
</script>

<style></style>
