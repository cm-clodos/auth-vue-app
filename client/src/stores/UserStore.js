import {defineStore} from "pinia";

export const useUserStore = defineStore('userStore', {
state: () => {
    return {
      authenticated: false,
      user: null,
    }
},
  getters: {
    authenticated: (state) => state.authenticated,
    user: (state) => state.user,
  },
  setters: {
    setAuthenticated(state, authenticated) {
      state.authenticated = authenticated;
    },

  },
  actions: {
    setUser(user) {
      this.user = user;
    },


    logout() {
      this.user = null;
      this.authenticated = false;
    }
  },

})