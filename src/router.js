import VueRouter from 'vue-router'
import a from './components/tabbar/a.vue'
import b from './components/tabbar/b.vue'
import c from './components/tabbar/c.vue'
import d from './components/tabbar/d.vue'
var router = new VueRouter({
routes:[
{path:"/home",component:a},
{path:"/member",component:b},
{path:"/shopcar",component:c},
{path:"/search",component:d}
],
linkActiveClass:'mui-active'
})
export default router