import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";



const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {name: "Home", path: '/', component: Home },
    {name: "Register", path: '/register', component: Register},
    {name: "Login", path: '/login', component: Login},
  ]
})

export default router
