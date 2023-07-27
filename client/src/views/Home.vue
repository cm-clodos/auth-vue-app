
<template>
Home
  <p>{{this.message}}</p>
</template>
<script>
import axios from "axios";
import {useUserStore} from "@/stores/UserStore";

export default {
  name: 'Home',
  data() {
    return {
      message: "",
      userStore: useUserStore()
    }
  },

  mounted() {
    axios.get("http://localhost:3000/api/user", {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    }).then(res => {
      console.log(res.data)
      this.userStore.$state.user = res.data
      this.userStore.$state.authenticated = true
      this.message = "Welcome " +  res.data.name +"!";

    }).catch(error => {
      console.log(error.response.data.message)
      this.message = "You are not logged in!"
    });

  },


  methods: {

  }
}

</script>

<style scoped>

</style>