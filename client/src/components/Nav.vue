<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
          <li>
            <button v-if="this.userStore.$state.authenticated" @click="logout" class="w-100 btn btn-sm btn-danger"
                    type="button">Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import axios from "axios";
import {useUserStore} from "@/stores/UserStore";

export default {
  name: 'Nav',
  data() {
    return {
      userStore: useUserStore()
    }
  },
  methods: {
    logout() {
      axios.post('http://localhost:3000/api/logout', {},
          {
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true
          }).then((response) => {
        console.log(response.data.message);
        this.userStore.$state.user = null
        this.userStore.$state.authenticated = false
        this.$router.push({name: 'Login'});
      }).catch((error) => {
        console.log(error);
      });
    }
  },
}

</script>

<style scoped>
button {
    margin-top: 5px;
    margin-left: 2px;
}
</style>