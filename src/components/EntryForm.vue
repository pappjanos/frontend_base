<template>
  <v-card width="800" class="mx-auto">
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
            Add new entry
          </v-col>
        </v-row>
        </v-card-title>
        <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              :rules="[rules.required]"
              v-model="title"
              label="Add a title"
              required
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-textarea
              name="text"
              label="Add your story"
              v-model="text"
              :rules="[rules.required]"
              required
            ></v-textarea>
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
              Submit
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
  name: "EntryForm",
  computed: {
    ...mapGetters("user", ["user"]),
  },
  methods: {
    ...mapActions("blog", ["addNewEntry"]),
    ...mapActions("blog", ["updateEntry"]),
    async onSubmit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        await this.addNewEntry({
          title: this.title,
          text: this.text,
          user_id: this.user.id,
        });
        this.loading = false;
      }
    },
  },
  data() {
    return {
      title: "",
      text: "",
      valid: true,
      loading: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
};
</script>

<style></style>
