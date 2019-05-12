import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 组件懒加载 | 异步路由 | 分片(块)打包
const Home =()=>import(/* webpackChunkName: "group-home" */ "@/pages/Home"); //高级写法
const Content = ()=>import("@/pages/Content");  //简洁写法
const Active=()=>import(/* webpackChunkName: "group-active" */ "@/pages/Active");
const PersonalCenter=()=>import(/* webpackChunkName: "group-personalCenter" */ "@/pages/PersonalCenter");
const Detail=()=>import(/* webpackChunkName: "group-detail" */ "@/pages/Detail");
const Error=()=>import(/* webpackChunkName: "group-error" */ "@/components/Error");
const Login=()=>import(/* webpackChunkName: "group-detail" */ "@/pages/Login");
const Register=()=>import(/* webpackChunkName: "group-detail" */ "@/pages/Register");

/* import Home from '@/pages/Home';
import Content from '@/pages/Content';
import Active from '@/pages/Active';
import PersonalCenter from '@/pages/PersonalCenter';
import Detail from '@/pages/Detail';
import Error from '@/components/Error' */

var routes=[
  {path:'/home',component:Home},
  {path:'/login',component:Login},
  {path:'/register',component:Register},
  {path:'/content',component:Content},
  {path:'/active',component:Active},
  {name:'detail',path:'/detail',component:Detail},
  {path:'/personalCenter',component:PersonalCenter},
  {path:'/',redirect:'/home'},
  {path:'*',component:Error}
];

let router = new VueRouter({
  // routes:数组
  // routes:routes
  routes,
  /* 使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。
   vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。 */
  scrollBehavior(to, from, savedPosition){
    return { x: 0, y: 0 }
  }
})

export default router;