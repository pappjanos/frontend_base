<template>
  <v-app>
    <v-app-bar app color="primary" dark> 
      {{ getUser.isloggedIn ? getUser.email : '' }} 
      <v-btn v-if="getUser.isloggedIn" @click="logout">Logout {{ getUser.isloggedIn }}</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from "./components/general/Snackbar.vue";
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "App",
  components: {
    Snackbar,
  },
  computed: {
    ...mapGetters("user", ["getUser"]),
  },
  methods: {
    ...mapActions("user", ["logout"]),
  },
  data: () => ({
    //
  }),
};
</script>
