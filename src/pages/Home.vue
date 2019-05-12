<template>
  <div class="home">
    <div data-am-widget="gotop" class="am-gotop am-gotop-fixed">
    <a href="#top" title="">
        <img class="am-gotop-icon-custom" src="img/goTop.png" />
    </a>
</div>

<div class="pet_mian" id="top">

  <Swipe></Swipe>
  <!-- <div data-am-widget="slider" class="am-slider am-slider-a1" data-am-slider='{"directionNav":false}' >
  <ul class="am-slides">
      <li>
            <img src="img/fl01.png">
            <div class="pet_slider_font">
                <span class="pet_slider_emoji"> (╭￣3￣)╭♡   </span>
                <span>“大白”有望成为现实：充气机器人研究取得进展</span>
            </div>
            <div class="pet_slider_shadow"></div>
      </li>
      <li>
            <img src="img/fl02.png">
            <div class="pet_slider_font">
                <span class="pet_slider_emoji">999</span>
                <span>已然魔性的雪橇犬哈士奇 —《雪地狂奔》</span>
            </div>
            <div class="pet_slider_shadow"></div>
      </li>
      <li>
            <img src="img/fl03.png">
            <div class="pet_slider_font">
                <span class="pet_slider_emoji"> 777</span>
                <span>《星际争霸2:虚空之遗》国服过审!</span>
            </div>
            <div class="pet_slider_shadow"></div>
      </li>
  </ul>
</div> -->


<div class="pet_circle_nav">
    <ul class="pet_circle_nav_list">
        <router-link
        to="/login"
        tag="li"
        >
        <a href="javascript:;" class="iconfont pet_nav_xinxianshi ">&#xe600;</a><span>登录</span>
        </router-link>
        <router-link
        to="/active"
        tag="li"
        >
        <a href="javascript:;" class="iconfont pet_nav_zhangzhishi ">&#xe600;</a><span>活动</span>
        </router-link>
        <!-- <li><a href="" class="iconfont pet_nav_zhangzhishi ">&#xe607;</a><span>趣闻</span></li> -->
        <!-- <li><a href="" class="iconfont pet_nav_kantuya ">&#xe62c;</a><span>阅读</span></li> -->
        <router-link
        to="/content"
        tag="li"
        >
        <a href="javascript:;" class="iconfont pet_nav_kantuya  ">&#xe600;</a><span>文章</span>
        </router-link>
        <li><a href="" class="iconfont pet_nav_mengzhuanti ">&#xe622;</a><span>专题</span></li>
        <li><a href="" class="iconfont pet_nav_meirong ">&#xe629;</a><span>订阅</span></li>
        <li><a href="" class="iconfont pet_nav_yiyuan ">&#xe602;</a><span>专栏</span></li>
        <li><a href="" class="iconfont pet_nav_dianpu ">&#xe604;</a><span>讨论</span></li>
        <li>
        <router-link
        to="/personalCenter"
        tag="span"
        >
        <a href="javascript:;" class="iconfont pet_nav_gengduo ">&#xe600;</a><span>个人中心</span>
        </router-link>
        </li>
    </ul>
    <div class="pet_more_list"><div class="pet_more_list_block">
    <div class="iconfont pet_more_close">×</div>
    <div class="pet_more_list_block">
        <div class="pet_more_list_block_name">
            <div class="pet_more_list_block_name_title">阅读 Read</div>
            <a class="pet_more_list_block_line">
                <i class="iconfont pet_nav_xinxianshi pet_more_list_block_line_ico">&#xe61e;</i>
                <div class="pet_more_list_block_line_font">新鲜事</div>
            </a>
                        <a class="pet_more_list_block_line">
                <i class="iconfont pet_nav_zhangzhishi pet_more_list_block_line_ico">&#xe607;</i>
                <div class="pet_more_list_block_line_font">趣闻</div>
            </a>
                        <a class="pet_more_list_block_line">
                <i class="iconfont pet_nav_kantuya pet_more_list_block_line_ico">&#xe62c;</i>
                <div class="pet_more_list_block_line_font">阅读</div>
            </a>
                        <a class="pet_more_list_block_line">
                <i class="iconfont pet_nav_mengzhuanti pet_more_list_block_line_ico">&#xe622;</i>
                <div class="pet_more_list_block_line_font">专题</div>
            </a>
                                    <a class="pet_more_list_block_line">
                <i class="iconfont pet_nav_bk pet_more_list_block_line_ico">&#xe629;</i>
                <div class="pet_more_list_block_line_font">订阅</div>
            </a>
                                    <a class="pet_more_list_block_line">
                <i class="iconfont pet_nav_wd pet_more_list_block_line_ico">&#xe602;</i>
                <div class="pet_more_list_block_line_font">专栏</div>
            </a>
 <div class="pet_more_list_block_name_title pet_more_list_block_line_height">服务 Service</div>
              <a class="pet_more_list_block_line">
                <i class="iconfont pet_nav_xinxianshi pet_more_list_block_line_ico">&#xe61e;</i>
                <div class="pet_more_list_block_line_font">新鲜事</div>
            </a>
                        <a class="pet_more_list_block_line">
                <i class="iconfont pet_nav_zhangzhishi pet_more_list_block_line_ico">&#xe607;</i>
                <div class="pet_more_list_block_line_font">趣闻</div>
            </a>
                        <a class="pet_more_list_block_line">
                <i class="iconfont pet_nav_kantuya pet_more_list_block_line_ico">&#xe62c;</i>
                <div class="pet_more_list_block_line_font">阅读</div>
            </a>
                        <a class="pet_more_list_block_line">
                <i class="iconfont pet_nav_mengzhuanti pet_more_list_block_line_ico">&#xe622;</i>
                <div class="pet_more_list_block_line_font">专题</div>
            </a>
                                    <a class="pet_more_list_block_line">
                <i class="iconfont pet_nav_bk pet_more_list_block_line_ico">&#xe629;</i>
                <div class="pet_more_list_block_line_font">订阅</div>
            </a>
                                    <a class="pet_more_list_block_line">
                <i class="iconfont pet_nav_wd pet_more_list_block_line_ico">&#xe602;</i>
                <div class="pet_more_list_block_line_font">专栏</div>
            </a>
        </div>
    </div>

    </div></div>
</div>
<div class="pet_content_main">
  <div data-am-widget="list_news" class="am-list-news am-list-news-default" >
  <div class="am-list-news-bd">
  <ul class="am-list">
     <!--缩略图在标题右边-->
      <li class="am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-right pet_list_one_block">
        <div class="pet_list_one_info">
            <div class="pet_list_one_info_l">
                <div class="pet_list_one_info_ico"><img src="img/a1.png" alt=""></div>
                <div class="pet_list_one_info_name">Super invincible 菁 </div>
            </div>
            <div class="pet_list_one_info_r">
                <div class="pet_list_tag pet_list_tag_xxs">新鲜事</div>
            </div>
        </div>
        <div class=" am-u-sm-8 am-list-main pet_list_one_nr">
            <h3 class="am-list-item-hd pet_list_one_bt"><a href="###" class="">十一长假哪也不去，宅在家里看电影！</a></h3>

        </div>
          <div class="am-u-sm-4 am-list-thumb">
            <a href="###" class="">
              <router-link
              to="/content"              
              >
              <img src="img/q1.jpg" class="pet_list_one_img" alt=""/>
              </router-link>
            </a>
          </div>
      </li>
            <li class="am-g am-list-item-desced pet_list_one_block">
              <div class="pet_list_one_info">
            <div class="pet_list_one_info_l">
                <div class="pet_list_one_info_ico"><img src="img/a3.png" alt=""></div>
                <div class="pet_list_one_info_name">养了猫的飞飞</div>
            </div>
            <div class="pet_list_one_info_r">
                <div class="pet_list_tag pet_list_tag_stj">阅读</div>
            </div>
        </div>
        <div class=" am-list-main">
            <h3 class="am-list-item-hd pet_list_one_bt"><a href="###" class="">浣熊孤儿掉到树下，被一家人收养之后……</a></h3>
  <ul data-am-widget="gallery" class="am-gallery am-avg-sm-3
  am-avg-md-3 am-avg-lg-3 am-gallery-default pet_list_one_list" >
      <li>
        <div class="am-gallery-item">
            <a href="###" class="">
              <img src="img/qq1.jpg"  alt="某天 也许会相遇 相遇在这个好地方"/>
            </a>
        </div>
      </li>
      <li>
        <div class="am-gallery-item">
            <a href="###" class="">
              <img src="img/qq2.jpg"  alt="不要太担心 只因为我相信"/>
            </a>
        </div>
      </li>
      <li>
        <div class="am-gallery-item">
            <a href="###" class="">
              <img src="img/qq3.jpg"  alt="终会走过这条遥远的道路"/>
            </a>
        </div>
      </li>
  </ul>
            <div class="am-list-item-text pet_list_two_text">巴哈马拿骚的居民Rosie Kemp发现一个刚出生的浣熊，掉在了树下。因为找不到小浣熊的妈妈了，Rosie和她的女儿Laura Young决定收养这只小东西，并给她取名“小南瓜”。</div>
        </div>
      </li>

            <li class="am-g am-list-item-desced pet_list_one_block">
              <div class="pet_list_one_info">
            <div class="pet_list_one_info_tytj"><i class="iconfont pet_nav_kantuya pet_more_list_block_line_ico pet_list_tytj_ico">&#xe607;</i>诺奖得主回忆通知获奖那一刻</div>
            <div class="pet_list_one_info_r">
                <div class="pet_list_tag pet_list_tag_kty">图集</div>
            </div>
        </div>
        <div class=" am-list-main">
  <ul data-am-widget="gallery" class="am-gallery am-avg-sm-3
  am-avg-md-3 am-avg-lg-3 am-gallery-default pet_list_one_list pet_list_one_tytj" >
      <li>
        <div class="am-gallery-item">
            <a href="###" class="">
              <img src="img/w1.jpg"  alt="某天 也许会相遇 相遇在这个好地方"/>
            </a>
        </div>
      </li>
      <li>
        <div class="am-gallery-item">
            <a href="###" class="">
              <img src="img/w2.jpg"  alt="不要太担心 只因为我相信"/>
            </a>
        </div>
      </li>
      <li>
        <div class="am-gallery-item">
            <a href="###" class="">
              <img src="img/w3.jpg"  alt="终会走过这条遥远的道路"/>
            </a>
        </div>
      </li>
       <li>
        <div class="am-gallery-item">
            <a href="###" class="">
              <img src="img/w4.jpg"  alt="终会走过这条遥远的道路"/>
            </a>
        </div>
      </li>
       <li>
        <div class="am-gallery-item">
            <a href="###" class="">
              <img src="img/w5.jpg"  alt="终会走过这条遥远的道路"/>
            </a>
        </div>
      </li>
       <li>
        <div class="am-gallery-item">
            <a href="###" class="">
              <img src="img/w6.jpg"  alt="终会走过这条遥远的道路"/>
            </a>
        </div>
      </li>
  </ul>
  </div>
      </li>
            <li class="am-g am-list-item-desced pet_list_one_block">
              <div class="pet_list_one_info">
            <div class="pet_list_one_info_l">
                <div class="pet_list_one_info_ico"><img src="img/a4.png" alt=""></div>
                <div class="pet_list_one_info_name">大兔</div>
            </div>
            <div class="pet_list_one_info_r">
                <div class="pet_list_tag pet_list_tag_zzs">趣闻</div>
            </div>
        </div>
        <div class=" am-list-main">
            <h3 class="am-list-item-hd pet_list_one_bt"><a href="###" class="">“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！</a></h3>


            <div class="am-list-item-text pet_list_two_text">狗狗会天天的跟着我们生活在一起，它们的一切都会影响着主人，尤其是狗狗身上散发的味道，会无时无刻的对主人有影响，如果狗狗身体有异味，主人就会用过于香喷喷的洗漱品帮狗狗洗澡，这样不仅对狗狗身体有伤害，还会容易患上皮肤病，其实，我们知道一些小技巧，就会改善狗狗身上存在的味道。</div>

        </div>
      </li>
      <li class="am-g am-list-item-desced pet_list_one_block">
              <div class="pet_list_one_info">
            <div class="pet_list_one_info_l">
                <div class="pet_list_one_info_ico"><img src="img/a5.png" alt=""></div>
                <div class="pet_list_one_info_name">Hope</div>
            </div>
            <div class="pet_list_one_info_r">
                <div class="pet_list_tag pet_list_tag_mzt">萌专题</div>
            </div>
        </div>
        <div class=" am-list-main">
            <h3 class="am-list-item-hd pet_list_one_bt"><a href="###" class="">心情不好了，就来看看这只狗！</a></h3>
            <div class="pet_list_zt_img"><img src="img/c1.png" alt=""></div>

            <div class="am-list-item-text pet_list_two_text">猫咪不像人，猫咪的情绪不会写在脸上，反馈给我们的信息更多的应该是行为上肢体上的，当然从叫声中也会反应一些信息，那么要想“抓住它的心，就一定要抓住它的胃吗？”从它的行为和肢体语言当中我们可以读懂什么呢？</div>

        </div>
      </li>
      <li class="am-g am-list-item-desced pet_list_one_block">
           <div class="pet_article_user_block">
             <div class="pet_article_user_img">
             <div class="pet_article_user_shadow"></div>
             <div class="pet_article_user_title">一周在任意地点工作三天？</div>
             <img src="img/c2.png" alt=""></div>
             <div class="pet_article_user_info">
                <div class="pet_article_user_info_ico"><img src="img/c.png" alt=""></div>SeeYouAgain
             </div>
             <div class="am-list-item-text pet_article_user_nr">这是一家帮助客户在亚太地区找到适合的打折酒店的中介机构，在全球设立了9个办事处，老板克里斯蒂安·米施勒宣称要把它打造成世界上最棒的公司。</div>
           </div>
      </li>
    </ul>
  </div>

    </div>

</div>
<div class="pet_article_dowload pet_dowload_more_top_off">
  
      <!-- {{list.length-3}} -->

  <!-- <div
    v-for="item in list.length-3"
    :key="item._id"
  >
    <router-link
    :to="{path:'/detail',params:{id:list[item]._id}}"
    >
      {{list[item]._id}}

      <img :src=" list[item-1].src" :id="123"/>
    </router-link>
  </div> -->
  <List :list="list"></List>


      
</div>
</div>
  </div>
</template>
<script>
import Swipe from "../components/Swipe";
import List from "../components/List";
import axios from "../plugins/axios"
export default {
  data(){return {
    list:[]
  }},
  components: { Swipe, List },
  /* mounted(){
    axios({
      url:"http://localhost:3000/api/list"
    }).then((res)=>{    
      this.list = res.data;
    });
  }, */
  async mounted(){
    //..
    let res = await axios({url:'http://localhost:3000/api/list'});
    this.list = res.data
  },
  methods:{
    
  }
}

</script>