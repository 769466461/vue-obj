<template>
<div class="swipe">
  <el-carousel :interval="5000" arrow="always">
   <el-carousel-item >
      <img src="img/fl01.png">
        <div class="pet_slider_font">
            <span class="pet_slider_emoji"> (╭￣3￣)╭♡   </span>
            <span>“大白”有望成为现实：充气机器人研究取得进展</span>
        </div>
        <div class="pet_slider_shadow"></div>
    </el-carousel-item>
    <el-carousel-item >
       <img src="img/fl02.png">
            <div class="pet_slider_font">
                <span class="pet_slider_emoji"> []~(￣▽￣)~*　</span>
                <span>已然魔性的雪橇犬哈士奇 —《雪地狂奔》</span>
            </div>
            <div class="pet_slider_shadow"></div>
    </el-carousel-item>
    <el-carousel-item >
      <img src="img/fl03.png">
            <div class="pet_slider_font">
                <span class="pet_slider_emoji"> (｡・`ω´･)　</span>
                <span>《星际争霸2:虚空之遗》国服过审!</span>
            </div>
            <div class="pet_slider_shadow"></div>
    </el-carousel-item>
    
  </el-carousel>
</div>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<script>
export default {
  
}
</script>