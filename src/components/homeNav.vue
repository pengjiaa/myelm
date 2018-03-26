<template>
  <div class="homeNav swiper-container">
      <ul class="swiper-wrapper">
          <li class="swiper-slide">
              <ul>
                  <li class="item" v-for = 'item in foodTypesList1'>
                  <router-link :to='{path:"/food",query:{geohash,title:item.title,restaurant_category_id: getCategoryId(item.link)}}'>
                        <div><img :src='baseUrl+item.image_url' alt=""></div>
                        <p>{{item.title}}</p>
                  </router-link>
                  
                  </li>
              </ul>
          </li>
          <li class="swiper-slide">
              <ul>
                  <li class="item" v-for = 'item in foodTypesList2'>
                  <router-link to="/food">
                        <div><img :src='baseUrl+item.image_url' alt=""></div>
                        <p>{{item.title}}</p>
                  </router-link>
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

import {foodTypes} from '../service/getData'
export default {
  name:'homeNav',
  data(){
      return {
            foodTypesList1:[],
            foodTypesList2:[],
            baseUrl:'https://fuss10.elemecdn.com'
      }
  },
  props:['geohash'],
  mounted(){
      foodTypes().then(res => {
            console.log(res.data)
            this.foodTypesList1 = res.data.slice(0,8)
            this.foodTypesList2 = res.data.slice(8)
            console.log(this.foodTypesList2)
      }).then(()=>{
            new Swiper('.swiper-container',{
            slidesPreview:1,
            loop: true,
            pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                  },
            })
      })

  },
  methods:{
        getCategoryId(url){
    		let urlData = decodeURIComponent(url.split('=')[1].replace('&target_name',''));
    		if (/restaurant_category_id/gi.test(urlData)) {
    			return JSON.parse(urlData).restaurant_category_id.id
    		}else{
    			return ''
    		}
    	}
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
              padding: .4rem 1.4rem;
        }
    }
</style>

