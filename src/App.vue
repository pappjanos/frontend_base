<template>
  <v-app>
    <v-app-bar app color="primary" dark> </v-app-bar>

    <v-main>
      <router-view />
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from "./components/general/Snackbar.vue";
export default {
  name: "App",
  components: {
    Snackbar,
  },
  data: () => ({
    //
  }),
};
</script>
