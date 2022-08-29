import Vue from 'vue'

import VueRouter from 'vue-router'
// import {createRouter, createWebHistory} from "vue-router";
import store from '../store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter)

/* Guest Component */
const Login = () => import('../components/Login.vue' /* webpackChunkName: "resource/js/components/login" */)
const Register = () => import('../components/Register.vue' /* webpackChunkName: "resource/js/components/register" */)
/* Guest Component */

/* Layouts */
const DahboardLayout = () => import('../components/Layouts/Dashboard.vue' /* webpackChunkName: "resource/js/components/layouts/dashboard" */)
/* Layouts */

/* Authenticated Component */
const Dashboard = () => import('../components/Dashboard.vue' /* webpackChunkName: "resource/js/components/dashboard" */)
/* Authenticated Component */

const listUser = () => import('../components/User.vue')

const notFound = () => import('../components/NotFound.vue')

const editUser = () => import('../components/EditUser.vue')

const routes = [
    {
        name:"login",
        path:"/login",
        component:Login,
        meta:{
            middleware:"guest",
            title:`Login`
        }
    },
    {
        name:"register",
        path:"/register",
        component:Register,
        meta:{
            middleware:"guest",
            title:`Register`
        }
    },
    {
        name: "dashboard",
        path:"/",
        component:DahboardLayout,
        meta:{
            middleware:"auth"
        },
    },
    {

    path:"/users/list",
        component:listUser,
        props: { title: "List users", page: "Users" },
        // meta:{
        //     middleware:"auth"
        // },
        children:[
            {
                name:"users.list",
                path: '/list',
                component: listUser,
                meta:{
                    title:`listUser`
                }
            },
            // {
            //     name : "users.edit" ,
            //     path: '/edit/:id',
            //     component: editUser,
            //     props: true
            // },

        ]
    },
    {
        name:'users.edit',
        path: 'users/:id/edit',
        component:editUser,
        props:true
        // children: [
        //     {
        //         name:"users.list",
        //         path: '/list2',
        //         component: listUser,
        //         meta:{
        //             title:`listUser`
        //         }
        //     },
        //     ]
    },


    {
        name:"noPath",
        path:"*",
        redirect:"404_notfound",
        // component:notFound,
    },
    {
        name:'404_notfound',
        path: "/404_notfound",
        component:notFound
    },

]

// var router  = new VueRouter({
//     mode: 'history',
//     routes: Routes
// })

// router.beforeEach((to, from, next) => {
//     document.title = `${to.meta.title} - ${process.env.MIX_APP_NAME}`
//     if(to.meta.middleware=="guest"){
//         if(store.state.auth.authenticated){
//             next({name:"dashboard"})
//         }
//         next()
//     }else{
//         if(store.state.auth.authenticated){
//             next()
//         }else{
//             next({name:"login"})
//         }
//     }
// })

export default routes

// export default createRouter({
//     history: createWebHistory(),
//     Routes
// })
