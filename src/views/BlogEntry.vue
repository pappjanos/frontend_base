<template>
  <div>
    <v-card class="my-5">
      <v-card-title>
        {{blogEntry.title}}
        <v-spacer></v-spacer>
        <v-btn &click="">Edit</v-btn>
      </v-card-title>
      <v-card-subtitle>
        {{blogEntry.createdAt}}
      </v-card-subtitle>
      <v-card-text>
        {{blogEntry.text}}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  data() {
    return {
    }
  },
  methods: {
    ...mapActions("blog", ["getBlogEntry"])
  },
  computed: {
    ...mapGetters("blog", ["blogEntry"])
  },
  async created() {
    await this.getBlogEntry(this.$route.params.id)
  }
};
</script>

<style></style>
