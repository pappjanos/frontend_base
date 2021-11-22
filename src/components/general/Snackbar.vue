<template>
  <div class="text-center">
    <v-snackbar
      :color="getSnackbar.color"
      v-model="getSnackbar.status"
      :timeout="getSnackbar.timeout"
    >
      {{ getSnackbar.message }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="closeSnackbar"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("general", ["getSnackbar"]),
  },
  methods: {
    ...mapActions("general", ["closeSnackbar"]),
  },
};
</script>
