import {createRouter, createWebHistory } from 'vue-router'

import About from '../views/About'
import Home from '../views/Home'

const routes =[
    {
        path:'/',
        name: 'About',
        component: About
    },
    {
        path:'/home',
        name: 'Home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router