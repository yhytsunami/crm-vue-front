import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

import msgTemplate from '../views/msgTemplates/index.vue'
import HelloWorld from "../components/HelloWorld.vue";
import App from "../App.vue";

const router = new VueRouter({
    routes:[
        {
            path:'/app',
            component:App
        },
        {
            path:'/hellowWorld',
            component:HelloWorld
        },
        {
            path:'/msgTemplate',
            component:msgTemplate
        }
    ]
})

export default router