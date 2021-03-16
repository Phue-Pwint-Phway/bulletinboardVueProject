import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tableData: []
      },
      getters: {

      },
      mutations: {
        addUser(state, payload) {
          state.tableData = state.tableData.concat(payload.data);
        }
      },
      actions: {
        addUser({ commit }, payload) {
          commit("addUser", payload);
        }
      }
});

