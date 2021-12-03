<template>
  <v-app>
    <v-app-bar app color="primary" dark> {{ getUser }} </v-app-bar>

    <v-main>
      <router-view />
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from "./components/general/Snackbar.vue";
import { mapGetters } from 'vuex'
export default {
  name: "App",
  components: {
    Snackbar,
  },
  computed: {
    ...mapGetters("user", ["getUser"]),
  },
  data: () => ({
    //
  }),
};
</script>
