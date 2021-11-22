<template>
  <div class="text-center">
    <v-snackbar
      :color="getAlert.color"
      v-model="getAlert.status"
      :timeout="getAlert.timeout"
    >
      {{ getAlert.message }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="closeAlert"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("general", ["getAlert"]),
  },
  methods: {
    ...mapActions("general", ["closeAlert"]),
  },
};
</script>
