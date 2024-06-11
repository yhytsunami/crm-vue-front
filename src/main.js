import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "element-ui/lib/theme-chalk/index.css";//element-ui样式3330
import ElementUI from 'element-ui';

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
