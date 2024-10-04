import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import PoiRecommendations from '../views/PoiRecommendations.vue'
import Carpool from '../views/Carpool.vue'
import History from '../views/History.vue'
import Home from '../views/Home.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/profile', component: Profile },
    { path: '/poi', component: PoiRecommendations },
    { path: '/carpool', component: Carpool },
    { path: '/history', component: History },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
