<template>
  <div>
    <div>
      {{ blogEntry.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blogEntry: Object,
  },
};
</script>

<style></style>
