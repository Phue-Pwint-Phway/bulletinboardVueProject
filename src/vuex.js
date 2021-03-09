import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    loginuser: null
};

const store = new Vuex.Store({
    state,
    getters: {
        loginuser: (state) => {
            return state.loginuser;
        }
    },
    actions: {
        loginuser(context, loginuser) {
            context.commit('loginuser', loginuser);
        }
    },
    mutations: {
        loginuser(state, loginuser) {
            state.loginuser = loginuser;
        }
    },
});

export default store;