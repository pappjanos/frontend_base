<template>
  <div>
    <v-card class="my-5">
      <v-card-title>
        <a @click="openEntry(blogEntry.id)">
          {{ blogEntry.title | toUpperCase }}
        </a>
      </v-card-title>
      <v-card-subtitle>
        Created: {{ blogEntry.createdAt | dateFilter }} Updated:
        {{ blogEntry.updatedAt | dateFilter }}
      </v-card-subtitle>
      <v-card-text>
        <div v-if="blogEntry.text.length > 600">
          {{ blogEntry.text.substring(0, 600)
          }}<a v-if="!showMore" @click="showMore = !showMore">...</a>
          <span v-if="showMore"
            >{{ blogEntry.text.substring(600, blogEntry.text.length) }}
            <a v-if="showMore" @click="showMore = !showMore">&lt;&lt;&lt;</a>
          </span>
        </div>
        <div v-else>{{ blogEntry.text }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import router from "../router";
export default {
  props: {
    blogEntry: Object,
  },
  data() {
    return {
      showMore: false,
    };
  },

  methods: {
    openEntry(id) {
      router.push({ name: "BlogEntry", params: { id } }).catch(() => {});
    },
  },
};
</script>

<style></style>
