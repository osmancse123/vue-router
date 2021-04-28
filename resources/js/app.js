require('./bootstrap');

// window.Vue =  require('vue');
import Vue from 'vue';
import VueRouter from 'vue-router';
// router imported
import { routes } from './routes.js';



Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes, // short for `routes: routes`
  }) 


const app = new Vue({
    el: '#app',
    router
});


