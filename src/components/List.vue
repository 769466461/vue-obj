<template>
  <div class="list">
    

    <h3>鞋子列表</h3>
    <div
    v-for="item in list.length-3"
    :key="item._id"
    class="img"
    >
    <!-- <router-link
    :to="{name:'detail',params:{id:list[item]._id},query:{h:123}}"
    > -->
    <router-link
    :to="{name:'detail',params:{id:list[item]._id}}"
    >
      <!-- {{list[item]._id}} -->

      <img :src=" list[item-1].src" :id="123"/>
    </router-link>
    </div>
    


  </div>
</template>
<script>
  export default {
    props:['list']
  }
</script>
<style>
  .list{background:#f99}
  .list h3{text-align: center}
  .list .img{margin: 1em 0;display: block}
</style>