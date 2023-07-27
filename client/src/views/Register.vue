<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please Register</h1>
    <div class="form-floating">
      <input type="name" class="form-control" placeholder="max" v-model="data.name" required>
      <label for="floatingInput">Name</label>
    </div>
    <div class="form-floating">
      <input type="email" class="form-control" placeholder="name@example.com" v-model="data.email" required>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" placeholder="Password" v-model="data.password" required>
      <label for="floatingPassword">Password</label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
  </form>
</template>
<script>
import axios from "axios";
import {useRouter} from "vue-router";

export default {
  name: 'Register',
  data() {
    return {
      data:{
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submit() {
      axios.post('http://localhost:3000/api/register', this.data,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        console.log(response);
        this.$router.push({name: 'Login'});
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}


</script>
<style scoped>

</style>