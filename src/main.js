import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import App from './App.vue'

Vue.config.productionTip = false

//配置全局资源    资源指向02
// import './assets/css/base.css'; 
import './assets/css/amazeui.min.css';
import './assets/css/animate.min.css';
import './assets/css/wap.css';


//引入路由
import router from './plugins/router'

//引入自定义插件 
import loading from './components/loading';//默认会找index.js | package。json所指定的入口模块
Vue.use(loading)//安装



//引入axios

import './plugins/axios';

/* axios  post传参解决办法：
一、URLSearchParams
1、在main.js里 设置配置，修改Content-Type */
// import axios from 'axios';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// Vue.prototype.$axios = axios;

//服务器资源指向
//全局 baseUrl
let config = require('../config/config') 
window.baseUrl = config.baseUrl.localhost


//全局过滤器
import filters from './filters'
Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]));


//引入vuex状态管理

import store from  './plugins/store'

let user = localStorage.getItem('vue_user');

user && store.commit('UPDATE_USER',JSON.parse(user))

new Vue({
  render: h => h(App),
  router,
  // store,
  data:{
    bLoading:true
  },
}).$mount('#app')


