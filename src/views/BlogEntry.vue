<template>
  <div>
    <v-form
      v-model="valid"
      lazy-validation
      ref="form"
    >
      <v-card class="my-5">
        <v-card-title class="d-flex justify-space-between">
          <div
            class="d-flex"
            v-if="titleEdit"
          >
            <v-text-field
              :rules="[rules.required]"
              v-model="title"
              label="Add a title"
              required
            >
            </v-text-field>
            <v-btn 
              text 
              class="ml-5"
              @click="onTitlePatch"
            >
              Save
            </v-btn>
          </div>
          <div 
            v-else
            class="pointer"
            @click="onTitleEdit">
            {{blogEntry.title}}
          </div>
          <v-btn text @click="onDeleteEntry(blogEntry.id)">Delete</v-btn>
        </v-card-title>
        <v-card-subtitle>
          {{blogEntry.createdAt}}
        </v-card-subtitle>
        <v-card-text>
          <div 
            class="f-flex"
            v-if="textEdit"
          >
            <v-textarea
              name="text"
              label="Add your story"
              v-model="text"
              :rules="[rules.required]"
              required
            ></v-textarea>
            <v-btn 
              text 
              class="ml-5"
              @click="onTextPatch"
            >
              Save
            </v-btn>
          </div>
          <div 
            v-else 
            @click="onTextEdit"
            class="pointer"
          >
            {{blogEntry.text}}
          </div>
        </v-card-text>
      </v-card>
    </v-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  data() {
    return {
      text: '',
      title: '',
      valid: true,
      loading: false,
      titleEdit: false,
      textEdit: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  methods: {
    ...mapActions("blog", ["getBlogEntry","patchEntry", "deleteEntry"]),
    onTitleEdit(){
      this.title = this.blogEntry.title
      this.titleEdit = true
    },
    onTextEdit(){
      this.text = this.blogEntry.text
      this.textEdit = true
    },
    async onTitlePatch(){
      this.titleEdit = false
      if (this.$refs.form.validate()) {
        this.loading = true;
        await this.patchEntry({
          title: this.title,
          id: this.$route.params.id
        });
        this.loading = false;
      }
    },
    async onTextPatch(){
      this.textEdit = false
      if (this.$refs.form.validate()) {
        this.loading = true;
        await this.patchEntry({
          text: this.text,
          id: this.$route.params.id
        });
        this.loading = false;
      }
    },
    onDeleteEntry(id){
      if (confirm("Are you sure to delete this entry?")) {
        this.deleteEntry(id)
      }
    }
  },
  computed: {
    ...mapGetters("blog", ["blogEntry"]),
  },
  async created() {
    await this.getBlogEntry(this.$route.params.id)
  }
};
</script>

<style>
.pointer {cursor: pointer;}
</style>
