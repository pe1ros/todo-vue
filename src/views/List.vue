<template>
  <div>
    <h1>List ToDo's</h1>
    <div class="row">
      <div class="input-field col s6">
        <select ref="select" v-model="filter">
          <option value="all" selected>All Todo's</option>
          <option value="active">Active Todo's</option>
          <option value="completed">Completed Todo's</option>
        </select>
      </div>
    </div>
    <hr />
    <table v-if="tasks.length">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Edit ToDo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task,index) of displayTasks" :key="task.id">
          <td>{{index + 1}}</td>
          <td class="td-title">
            <div class="text">{{task.title}}</div>
          </td>
          <td class="td-description">
            <div class="text">{{task.description}}</div>
          </td>
          <td>
            <div
              v-bind:class="{status_active :task.status === 'active', status_completed :task.status !== 'active' }"
            >{{task.status}}</div>
          </td>
          <td>
            <router-link tag="button" class="btn btn-small" :to="'/task/' + task.id">Edit</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No ToDo's</p>
  </div>
</template>

<script>
import M from "materialize-css";
export default {
  data: () => ({
    filter: "all",
  }),
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
    displayTasks() {
      return this.tasks.filter((t) => {
        if (this.filter === "all") {
          return true;
        }
        return t.status === this.filter;
      });
    },
  },
  mounted() {
    M.FormSelect.init(this.$refs.select);
  },
};
</script>
<style lang="scss" scoped>
.text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  min-width: 200px;
}
.td-title {
  max-width: 400px;
}
.td-description {
  max-width: 400px;
}
.status {
  &_active {
    border: 1px solid black;
    background-color: yellow;
    border-radius: 15px;
    height: 30px;
    width: 80px;
    text-align: center;
  }
  &_completed {
    border: 1px solid black;
    background-color: #28ff32;
    border-radius: 15px;
    height: 30px;
    width: 80px;
    text-align: center;
  }
}
</style>
 
 