<template>
  <div class="detail">
    <Swipe></Swipe>
        <header data-am-widget="header"
        class="am-header am-header-default pet_head_block">
        <div class="am-header-left am-header-nav ">
          <router-link
          tag="span"
          to="/home"
          >
          <a class="iconfont pet_head_jt_ico">&#xe601;</a>
          </router-link>
          
        </div>
        <div class="pet_news_list_tag_name">商品列表</div>
        <div class="am-header-right am-header-nav">
          <a href="javascript:;" class="iconfont pet_head_gd_ico">&#xe600;</a>
        </div>
      </header>
      <hr>
      <img :src="src" class="shoes"/>
      商品名字:{{name}}
      <br>
      商品名字价格:{{price}}
      <br>
      商品id:{{goodsId}}
  </div>
</template>

<style>
  .shoes{width:200px;height: 192px;display: block;margin: 0 auto 1rem}
</style>
in

<script>
import axios from "../plugins/axios";
import Swipe from "../components/Swipe";
export default {
  components: { Swipe },
 data(){return {
    detail:{},
    error:false,
    id:"",
    data:[],
    src:"",
    name:"",
    price:"",
    goodsId:"",
  }},

  /* mounted(){
    this.id = this.$route.params.id;
  } */
  async mounted(){
    this.id = this.$route.params.id;
    let res = await axios({url:'http://localhost:3000/api/list'});
    this.data = res.data;
    for(let i=0;i<this.data.length;i++){
      if(this.data[i]._id == this.id){
         this.name = this.data[i].name; 
         this.price = this.data[i].price; 
         this.goodsId = this.data[i].goodsId;
         this.src = this.data[i-1].src;  
      }
    }

  }
}

</script>

