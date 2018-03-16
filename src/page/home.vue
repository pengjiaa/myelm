<template>
<div class="home">
  <headTop>
    <div slot="home" class="homeTop">
      <span class="icon iconfont icon-search"></span>
      <span class="icon iconfont icon-dingwei">上海市人民上海市人民上海市人民政府</span>
    </div>
  </headTop>
  <homeNav></homeNav>
  <div class="line"></div>
        <div class="store">
          
              <span class="icon iconfont icon-shangjia"></span>
              <i>推荐商家</i>
          
      </div>
  <homeList></homeList>
  <footBottom></footBottom>
</div>
</template>

<script>
import headTop from '../components/header'
import homeNav from '../components/homeNav'
import homeList from '../components/homeList'
import footBottom from '../components/footer'
export default {
  components:{
    headTop,
    homeNav,
    homeList,
    footBottom
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
    width: 50%;
    position: absolute;
    left: 25%;
    top: 18%;
    font-size: 2rem;
    color: #FFF;
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


