<template>
  <div class="row">
    <div v-if="task">
      <h1 class="head-text">{{task.title}}</h1>
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
        <div>
          <button
            v-if="task.status === 'active'"
            class="btn blue"
            type="submit"
            style="margin-right: 10px"
          >Update ToDo</button>
          <button
            v-if="task.status === 'active'"
            class="btn green"
            type="button"
            style="margin-right: 10px"
            @click="completeTask"
          >Complete ToDo</button>
          <button class="btn red" type="button" @click="deleteTask">Delete ToDo</button>
        </div>
      </form>
    </div>

    <h1 v-else>ToDo not found</h1>
  </div>
</template>

<script>
export default {
  computed: {
    task() {
      return this.$store.getters.taskById(+this.$route.params.id);
    },
  },
  data: () => ({
    title: "",
    description: "",
  }),
  mounted() {
    this.title = this.task.title;
    this.description = this.task.description;
    /*setTimeout(() => {
      M.updateTextFields();
    }, 0);*/
  },
  methods: {
    submitHandler() {
      this.$store.dispatch("updateTask", {
        id: this.task.id,
        title: this.title,
        description: this.description,
      });
      this.$router.push("/list");
    },
    completeTask() {
      this.$store.dispatch("completeTask", { id: this.task.id });
      this.$router.push("/list");
    },
    deleteTask() {
      this.$store.dispatch("deleteTask", { id: this.task.id });
      this.$router.push("/list");
    },
  },
};
</script>
<style lang="scss" scoped>
.head-text {
  word-wrap: break-word;
  overflow: hidden;
  min-width: 400px;
}
.row {
  max-width: 60%;
}
</style>
 