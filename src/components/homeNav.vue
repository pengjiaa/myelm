<template>
  <div class="homeNav swiper-container">
      <ul class="swiper-wrapper">
          <li class="swiper-slide">
              <ul>
                  <router-link to="/food">
                  <li class="item">
                        <div><img src="../../static/food.png" alt=""></div>
                        <p>名字</p>
                  </li>
                  </router-link>
                  <li class="item">
                        <div><img src="../../static/food.png" alt=""></div>
                        <p>名字</p>
                  </li>
                  <li class="item">
                        <div><img src="../../static/food.png" alt=""></div>
                        <p>名字</p>
                  </li>
                  <li class="item">
                        <div><img src="../../static/food.png" alt=""></div>
                        <p>名字</p>
                  </li>
                  <li class="item">
                        <div><img src="../../static/food.png" alt=""></div>
                        <p>名字</p>
                  </li>
                  <li class="item">
                        <div><img src="../../static/food.png" alt=""></div>
                        <p>名字</p>
                  </li>
                  <li class="item">
                        <div><img src="../../static/food.png" alt=""></div>
                        <p>名字</p>
                  </li>
                  <li class="item">
                        <div><img src="../../static/food.png" alt=""></div>
                        <p>名字</p>
                  </li>
              </ul>
          </li>
          <li class="swiper-slide">
              <ul>
                  <li class="item">
                        <img src="../../static/food.png" alt="">
                        <p>名字</p>
                  </li>
                  <li class="item">
                        <img src="../../static/food.png" alt="">
                        <p>名字</p>
                  </li>
                  <li class="item">
                        <img src="../../static/food.png" alt="">
                        <p>名字</p>
                  </li>
                  <li class="item">
                        <img src="../../static/food.png" alt="">
                        <p>名字</p>
                  </li>
                  <li class="item">
                        <img src="../../static/food.png" alt="">
                        <p>名字</p>
                  </li>
                  <li class="item">
                        <img src="../../static/food.png" alt="">
                        <p>名字</p>
                  </li>
                  <li class="item">
                        <img src="../../static/food.png" alt="">
                        <p>名字</p>
                  </li>
                  <li class="item">
                        <img src="../../static/food.png" alt="">
                        <p>名字</p>
                  </li>
              </ul>
          </li>
      </ul>
    <div class="swiper-pagination"></div>
  </div>

</template>
<script>
import Swiper from '../../node_modules/swiper/dist/js/swiper.min.js'
import '../../node_modules/swiper/dist/css/swiper.min.css'
export default {
  name:'homeNav',
  data(){
      return{

      }
  },
  mounted(){
      new Swiper('.swiper-container',{
          slidesPreview:1,
          loop: true,
          pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
      })
  }
}
</script>

<style lang='less' scoped>
    .homeNav {
        width: 100%;
        padding-bottom: 30px;
        border-bottom: .1rem solid #e4e4e4;
        li{
            list-style: none;
        }
        .item {
            width:25%;
            float: left;
            list-style: none;
            text-align: center;
            img{
                width: 100%;
            }
            p{
                color: #000;
            }
        }
        .item div{
              padding: 8px;
        }
    }
</style>

