<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        <h1 class="pointer headline">
          <v-icon>fas fa-mobile-alt</v-icon>
          Private Blog
        </h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-if="user.isloggedIn" to="/add-new-entry" text>Add new Entry</v-btn>
        <v-btn v-if="!user.isloggedIn" to="/register" text>Registration</v-btn>
        <v-btn v-if="!user.isloggedIn" to="/login" text>Sign in</v-btn>
        <v-btn v-if="user.isloggedIn" text
          >Logged in as: {{ user.isloggedIn && user.email }}</v-btn
        >
        <v-btn v-if="user.isloggedIn" text @click="logout">Logout </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <v-container fluid class="px-10">
        <router-view />
      </v-container>
      <Snackbar />
    </v-main>
    <v-footer app color="primary" dark> All rights reserved 2021 </v-footer>
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
    ...mapGetters("user", ["user"]),
  },
  methods: {
    ...mapActions("user", ["logout", "reloadUserFromLocalStorage"]),
  },
  created() {
    this.reloadUserFromLocalStorage()
  },
  data: () => ({
    //
  }),
};
</script>
