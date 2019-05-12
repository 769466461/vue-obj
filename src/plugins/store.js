import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// console.log(Vuex);// {Store,mapActions,mapGetters}


// let store = new Vuex.Store(配置);

import actions from '../store/actions'
import mutations from '../store/mutations'
import getters from '../store/getters'
import state from '../store/state'

let store = new Vuex.Store({
  actions,mutations,getters,state
});


export default store