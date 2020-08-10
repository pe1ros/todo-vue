import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    updateTask(state, { id, title, description }) {
      const tasks = state.tasks.concat();
      const index = tasks.findIndex((t) => t.id === id);
      const task = tasks[index];

      tasks[index] = { ...task, title, description };
      state.tasks = tasks;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    completeTask(state, { id }) {
      const index = state.tasks.findIndex((t) => t.id === id);
      state.tasks[index].status = "completed";
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask(state, { id }) {
      const index = state.tasks.findIndex((t) => t.id === id);
      state.tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
  actions: {
    createTask({ commit }, task) {
      commit("createTask", task);
    },
    updateTask({ commit }, task) {
      commit("updateTask", task);
    },
    completeTask({ commit }, id) {
      commit("completeTask", id);
    },
    deleteTask({ commit }, id) {
      commit("deleteTask", id);
    },
  },
  getters: {
    tasks: (s) => s.tasks,
    taskById: (s) => (id) => s.tasks.find((t) => t.id === id),
  },
});
