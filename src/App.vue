<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        <h1 class="pointer headline" >
          <v-icon>fas fa-mobile-alt</v-icon>
          Blog
        </h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-if="!getUser.isloggedIn" to="/register" text>Registration</v-btn>
        <v-btn v-if="!getUser.isloggedIn" to="/login" text>Sign in</v-btn>
        <v-btn v-if="getUser.isloggedIn" to="/profile" text>Logged in as: {{ getUser.isloggedIn && getUser.email }}</v-btn>
        <v-btn v-if="getUser.isloggedIn" text @click="logout">Logout </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view />
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from "./components/general/Snackbar.vue";
import { mapGetters, mapActions } from "vuex";
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
