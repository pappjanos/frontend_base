<template>
  <v-card width="600px" class="mx-auto">
    <v-form
      v-model="valid"
      lazy-validation
      ref="form"
      @submit.prevent="onSubmit"
    >
      <v-container>
       <v-card-title>
        <v-row>
          <v-col cols="12">
            Login
          </v-col>
        </v-row>
        </v-card-title>
        <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              :rules="[rules.required, rules.email]"
              v-model="email"
              label="E-mail"
              required
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="password"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPass ? 'text' : 'password'"
              label="Password"
              @click:append="showPass = !showPass"
              counter
              hint="At least 8 characters"
              :rules="[rules.required, rules.min]"
              required
            >
            </v-text-field>
          </v-col>
        </v-row>
        </v-card-text>
        <v-card-actions>
        <v-row>
          <v-col cols="12">
            <v-btn
              :loading="loading"
              :disabled="!valid || loading"
              type="submit"
            >
              Login
            </v-btn>
          </v-col>
        </v-row>
        </v-card-actions>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Login",
  methods: {
    ...mapActions("user", ["login"]),
    async onSubmit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        await this.login({
          email: this.email,
          password: this.password,
        });
        this.loading = false;
      }
    },
  },
  data() {
    return {
      email: "",
      password: "",
      valid: true,
      showPass: false,
      loading: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
};
</script>

<style></style>
