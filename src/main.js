import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue' 

import './lib/mui/css/mui.min.css'
import { Header,Swipe, SwipeItem } from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(VueRouter)
import router from './router.js'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
