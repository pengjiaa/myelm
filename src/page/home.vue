<template>
<div class="home">
  <headTop>
    <div slot="home" class="homeTop">
      <span class="icon iconfont icon-search"></span>
      <span class="icon iconfont icon-dingwei">{{guessCity}}</span>
    </div>
  </headTop>
  <homeNav :geohash = 'geohash'></homeNav>
  <div class="line"></div>
        <div class="store">
          
              <span class="icon iconfont icon-shangjia"></span>
              <i>推荐商家</i>
          
      </div>
  <homeList ></homeList>
  <footBottom></footBottom>
</div>
</template>

<script>
import headTop from '../components/header'
import homeNav from '../components/homeNav'
import homeList from '../components/homeList'
import footBottom from '../components/footer'

import {cityGuess} from '../service/getData'

export default {
  data(){
    return {
      guessCity:'',
      geohash:'',

    }
  },
  components:{
    headTop,
    homeNav,
    homeList,
    footBottom
  },
  mounted(){
    cityGuess().then( res => {
      console.log(res)
      this.guessCity = res.data.name;
      this.geohash = res.data.latitude+','+res.data.longitude
    })
  }
}
</script>

<style lang="less" scoped>
.home {
  padding-top: 4.6rem;
}
.homeTop {
  .icon-search {
    position: absolute;
    left: 5%;
    top: 16%;
    font-size: 3rem;
    color: #FFF;
  }
  .icon-dingwei {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 2rem;
    color: #FFF;
    padding: .2rem;
    transform: translate(-50%,-50%);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.line {
  height: 1rem;
  background: #F5F5F5;
}
    .store {
        height: 2rem;
        padding:.8rem;
        border-bottom: .1rem solid #f1f1f1;
        span {
            font-size: 2rem;
        }
        i {
            font-style: normal;
            font-size: 1.4rem;
            padding-left: 1rem;
        }
    }
</style>


