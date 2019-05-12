<template>
  <div id="app">
    <!-- <loading v-show="bLoading"></loading> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  components:{
  },
  mounted(){
  
  },
  computed:mapGetters([
    'bLoading'
  ])
}

//<loading v-show="$root.$data.bLoading"></loading>
</script>

<style>

</style>
