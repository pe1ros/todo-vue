<template>
  <div class="row">
    <h1>Create ToDo</h1>
    <form @submit.prevent="submitHandler">
      <div class="input-field">
        <input id="title" v-model="title" type="text" class="validate" required />
        <label for="title" class="active">Title</label>
      </div>
      <div class="input-field">
        <textarea
          id="description"
          v-model="description"
          class="materialize-textarea"
          style="height:150px"
        ></textarea>
        <label for="description" class="active">Description</label>
      </div>
      <button class="btn" type="submit">Create ToDo</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "create",
  data: () => ({
    title: "",
    description: "",
  }),
  methods: {
    submitHandler() {
      const task = {
        title: this.title,
        description: this.description,
        id: Date.now(),
        status: "active",
      };
      this.$store.dispatch("createTask", task);
      this.$router.push("/list");
    },
  },
};
</script>
<style lang="scss" scoped>
.row {
  max-width: 60%;
}
</style>
 