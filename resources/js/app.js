//app.js

// khai báo các component
require('./bootstrap');

Vue.component('app', require('./components/App'));

// import vue router, component và routes
import App from './components/App';``
import Layout from './components/Layout';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router/index.js';

// use router
console.log("VueRouter",VueRouter);
Vue.use(VueRouter);

// khai báo dùng router này
const router = new VueRouter({
    routes,
    mode: 'history'
});

// và cuối cùng là tạo 1 instance Vue và render tại phần tử có id là app,
// render tại component App và dùng router đã khai báo ở trên
const app = new Vue({
    el: '#app',
    render: h => h(Layout),
    router
});

