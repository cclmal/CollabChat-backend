import { createStore } from 'vuex';

export default createStore({
  state: {
    messages: [],
    users: []
  },
  mutations: {
    addMessage(state, message) {
      state.messages.push(message);
    },
    addUser(state, user) {
      state.users.push(user);
    }
  },
  actions: {
    initializeSocket({ commit }, socket) {
      socket.on("message", (message) => {
        commit("addMessage", message);
      });
      // ... otros eventos de socket
    },
    // ... otras acciones
  }
});