import Vue from 'vue'
import Router from 'vue-router'
import CherryBlossoms from '../components/cherryBlossoms.vue'
import Canvas from '../components/canvas.vue'
import Index from '../components/index.vue'
Vue.use(Router)
const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            // name:'index',
            component:Index
        },
        {
            path:'/cherryBlossoms',
            // name:'cherryBlossoms',
            component:CherryBlossoms
        },
        {
            path:'/canvas',
            // name:'canvas',
            component:Canvas
        }
    ]
})
export default router
